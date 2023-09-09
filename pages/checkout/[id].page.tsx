import { useState } from 'react'

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import StepperCheckout from 'dh-marvel/components/checkout/StepperCheckout';
import { Grid } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comic } from 'interfaces/comic';
import ImageDetail from 'dh-marvel/components/comics/detail/ImageDetail';


interface Props {
	comic: Comic;
}

const CheckoutPage: NextPage<Props> = ({ comic }) => {

	return (
		<Container>
			<Box margin={5}>
				<Grid container spacing={2} >
					<Grid item xs={12} sm={4} >
						<ImageDetail comic={comic} />
						<Typography>{comic.title}</Typography>
					</Grid>
					<Grid item xs={12} sm={8}>
						<Paper
							sx={{
								p: 2,
								margin: 'auto',
								maxWidth: 500,
								flexGrow: 1,
								backgroundColor: (theme) =>
									theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
							}}>

							<StepperCheckout />
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Container>
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
	const paths = data.data.results.map((comic: Comic) => ({ params: { id: comic.id.toString() } }))

	return {
		paths,
		fallback: 'blocking',
	};
}


export default CheckoutPage

