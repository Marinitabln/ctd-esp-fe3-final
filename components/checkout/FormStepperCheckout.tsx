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
import { useFormContext } from "react-hook-form";
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
    const [data, setData] = useState(defaultValues)
    const router = useRouter()

    // const {handleSubmit} = useFormContext()

    console.log({ data });

    const handlerPersonalData = (data: any) => {
        setData({ ...data, personalData: data })
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handlerDeliveryAddress = (data: any) => {
        setData({ ...data, deliveryAddress: data })
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handlerPaymentData = (data: any) => {
        console.log(data);

        //TODO: verificar que el objeto llega completo, hacer fetch y redireccionar (middleware)
        setData({ ...data, paymentData: data })
        setData({ ...data, orderData: orderData })

        const response = postCheckout(data)
        response.then((res) => {
            if (res.ok) {
                router.push( "/confirmacion-compra")
                localStorage.setItem('checkout', 'pago-exitoso')
            }

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
                  {/*   <form > */}
                        <Box> {activeStep === 0 && <>
                            <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                            <FormPersonalData /* handleSubmit={handleSubmit} */ handlerPersonalData={handlerPersonalData} />
                        </>}
                            {activeStep === 1 && <>
                                <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                                <FormDeliveryAddress /* handleSubmit={handleSubmit} */ handlerDeliveryAddress={handlerDeliveryAddress} />
                            </>}
                            {activeStep === 2 && <>
                                <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                                <FormPaymentData /* handleSubmit={handleSubmit} */ handlerPaymentData={handlerPaymentData} />
                            </>}
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >Volver
                            </Button>
                        </Box>
                 {/*    </form> */}
                </Paper>
            </Box>
        </Box>
    );
}

export default StepperCheckout


