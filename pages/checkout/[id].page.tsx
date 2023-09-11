import { useState } from 'react'

import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import FormStepperCheckout from 'dh-marvel/components/checkout/FormStepperCheckout';
import { Grid } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comic } from 'interfaces/comic';
import ImageDetail from 'dh-marvel/components/comics/detail/ImageDetail';
import { schema } from "rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";


interface Props {
	comic: Comic;
}

const CheckoutPage: NextPage<Props> = ({ comic }) => {

	type DataForm = yup.InferType<typeof schema>;

	const method = useForm<DataForm>({
		resolver: yupResolver(schema),
		defaultValues: {},
	});

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
							<FormProvider {...method}>
								<FormStepperCheckout />
							</FormProvider>
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

	console.log({ comic });


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

