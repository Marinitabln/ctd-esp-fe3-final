import { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import StepperCheckout from 'dh-marvel/components/checkout/StepperCheckout';
import { Grid } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comic } from 'interfaces/comic';


interface Props {
    comic: Comic;
}

const CheckoutPage:NextPage<Props> = ({comic}) => {

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = parseInt(params?.id as string);
	const comic = await getComic(id);
   
	return {
		props: {
			comic
		},
		revalidate: 60 * 60 * 24 //en 24hs hace la actualización
	}
}
export const getStaticPaths: GetStaticPaths = async () => {

	const data = await getComics();
	const paths = data.data.results.map((comic: Comic) => ({ params: { id: comic.id.toString() }}))

	return {
		paths,
		fallback: 'blocking',
	};
}


export default CheckoutPage

