import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormPersonalData from './forms/FormPersonalData';
import FormDeliveryAddress from './forms/FormDeliveryAddress';
import FormPaymentData from './forms/FormPaymentData';
import { IComicData } from 'interfaces/comic';
import { postCheckout } from 'dh-marvel/services/checkout/checkout.service';
import { useRouter } from 'next/router';

const steps = ['Datos Personales', 'Dirección de entrega', 'Datos del pago'];


const defaultValues = {
    personalData: {
        name: '',
        lastName: '',
        email: ''
    },
    deliveryAddress: {
        address: '',
        apartment: '',
        city: '',
        state: '',
        zipCode: ''
    },
    paymentData: {
        creditCardNumber: '',
        cardHolderName: '',
        expirationDate: '',
        securityCode: ''
    },
    orderData: {
        comicImage: '',
        comicTitle: '',
        comicPrice: 0
    }
}

interface Props {
    orderData: IComicData
}

const StepperCheckout = ({ orderData }: Props) => {

    const [activeStep, setActiveStep] = useState(0);
    const [dataForm, setDataForm] = useState(defaultValues)
    const router = useRouter()


    console.log({ dataForm });

    const handlerPersonalData = (data: any) => {
        setDataForm({ ...dataForm, personalData: data })
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handlerDeliveryAddress = (data: any) => {
        setDataForm({ ...dataForm, deliveryAddress: data })
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handlerPaymentData = (data: any) => {
     
        setDataForm({ ...dataForm, paymentData: data, orderData: orderData })
        console.log(dataForm);

        const response = postCheckout(dataForm)
        response.then((res) => {
            console.log(res.data);
            if (res.data) {
                localStorage.setItem(
                    "checkoutData",
                    JSON.stringify({
                        ...dataForm,
                        paymentData: { ...data,  creditCardNumber: '',
                        cardHolderName: '',
                        expirationDate: '',
                        securityCode: '' },
                        orderData: orderData
                    })
                )
                router.push("/confirmacion-compra")
            };
        })
        
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ width: '100%' }}>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Box sx={{ margin: '20px' }}>
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 400,
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}>
                    <Box> {activeStep === 0 && <>
                        <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                        <FormPersonalData handlerPersonalData={handlerPersonalData} />
                    </>}
                        {activeStep === 1 && <>
                            <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                            <FormDeliveryAddress handlerDeliveryAddress={handlerDeliveryAddress} />
                        </>}
                        {activeStep === 2 && <>
                            <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                            <FormPaymentData handlerPaymentData={handlerPaymentData} />
                        </>}
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >Volver
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}

export default StepperCheckout


