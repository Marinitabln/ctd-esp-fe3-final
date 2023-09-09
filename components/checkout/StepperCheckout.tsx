import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormPersonalData from './FormPersonalData';
import FormDeliveryAddress from './FormDeliveryAddress';
import FormPaymentData from './FormPaymentData';

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

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

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
            {activeStep === 0 && <FormPersonalData />}
            {activeStep === 1 && <FormDeliveryAddress />}
            {activeStep === 2 && <FormPaymentData />}
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
                <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
                </Button>
            </Box>
        </Box>
    );
}

export default StepperCheckout

