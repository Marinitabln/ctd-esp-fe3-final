import { useState} from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


const CheckoutPage = () => {

	const [step, setStep] = useState(1)

	const {handleSubmit} = useFormContext();

	const onSubmit = (data: any) => {
		
	};

	const nextStep = () => {
		setStep(step + 1)
	}

	const prevStep = () => {
		setStep(step - 1)
	}

	return (
		<Box sx={{maxWidth: "500px"}}>
			<Paper
				elevation={1}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<Typography variant="h4" align="center">
					Datos personales
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>

					{step === 1 && ''}

					{step === 2 && ''}
      
					<Box>
						{step > 1 && <Button onClick={prevStep}>Anterior</Button>}
						{step < 2 && <Button onClick={nextStep}>Siguiente</Button>}
						{step === 2 && <Button type="submit">Enviar</Button>}
					</Box>
				</form>
			</Paper>
		</Box>
	);
};
}


export default CheckoutPage