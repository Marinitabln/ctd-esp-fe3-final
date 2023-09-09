import { useState} from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import StepperCheckout from 'dh-marvel/components/checkout/StepperCheckout';


const CheckoutPage = () => {

	const [step, setStep] = useState(1)

	const nextStep = () => {
		setStep(step + 1)
	}

	const prevStep = () => {
		setStep(step - 1)
	}

	return (
		<StepperCheckout />
		
	);

}


export default CheckoutPage