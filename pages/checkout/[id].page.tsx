import { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import StepperCheckout from 'dh-marvel/components/checkout/StepperCheckout';
import { Grid } from '@mui/material';


const CheckoutPage = () => {

	const [step, setStep] = useState(1)

	const nextStep = () => {
		setStep(step + 1)
	}

	const prevStep = () => {
		setStep(step - 1)
	}

	return (
		<Grid item>
			<Grid item>

			</Grid>
			<Grid item >
				<Paper
					sx={{
						p: 2,
						margin: 'auto',
						maxWidth: 800,
						flexGrow: 1,
						backgroundColor: (theme) =>
							theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
					}}>

					<StepperCheckout />
				</Paper>
			</Grid>
		</Grid>
	);

}


export default CheckoutPage