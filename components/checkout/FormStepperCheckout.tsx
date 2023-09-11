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
    }
}


const StepperCheckout = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [data, setData] = useState(defaultValues)

    const { handleSubmit, formState: { errors }  } = useFormContext();

    console.log({errors});
    

    const handlerPersonalData = (data: any) => {
        setData({ ...data, personalData: data })
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handlerDeliveryAddress = (data: any) => {
        setData({ ...data, deliveryAddress: data })
    }

    const handlerPaymentData = (data: any) => {
        setData({ ...data, paymentData: data })
    }

    const handleNext = () => {
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onSubmit = (data: any) => {          
        activeStep === 0 && handlerPersonalData(data)
        activeStep === 1 && handlerDeliveryAddress(data)
        activeStep === 2 && handlerPaymentData(data)
         //console.log(data);        
     }

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

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {activeStep === 0 && <>
                            <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                            <FormPersonalData />
                        </>}
                        {activeStep === 1 && <>
                            <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                            <FormDeliveryAddress />
                        </>}
                        {activeStep === 2 && <>
                            <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
                            <FormPaymentData />
                        </>}

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Volver
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext} type='submit'>
                                {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </Box>
    );
}

export default StepperCheckout

