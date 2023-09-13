import { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid';
import FormStepperCheckout from 'dh-marvel/components/checkout/FormStepperCheckout';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import ImageDetail from 'dh-marvel/components/comics/detail/ImageDetail';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comic, IComicData } from 'interfaces/comic';
import { schema } from "rules";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";


interface Props {
	comic: Comic;
}


const CheckoutPage: NextPage<Props> = ({ comic }) => {

	const [comicData, setComicData] = useState<IComicData>({
		comicImage:'',
		comicTitle:'',
		comicPrice: 0
	})

	type DataForm = yup.InferType<typeof schema>;

	const method = useForm<DataForm>({
		resolver: yupResolver(schema),
		defaultValues: {},
	});

	useEffect (()=>{
		if(comic){
			setComicData({
				comicImage: `${comic.images[0].path}.${comic.images[0].extension}`,
				comicTitle: comic.title,
				comicPrice: comic.price 
			})
		}
	},[comic])

	return (
		<Container>
			<Box margin={5}>
				<Grid container spacing={2} >
					<Grid item xs={12} sm={4} >
						<Paper
							sx={{
								p: 3,
								margin: 'auto',
								maxWidth: 600,
								flexGrow: 1,
								backgroundColor: (theme) =>
									theme.palette.mode === 'dark' ? '#1A2027' : '#dcdcdc',
							}}>
							<ImageDetail comic={comic} />
							<Divider sx={{ margin: '15px' }} />
							<Typography>{comic.title}</Typography>
							<Divider sx={{ margin: '15px' }} />
							<Typography variant='body2'>Total a pagar: ${comic.price}</Typography>
						</Paper>
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
								<FormStepperCheckout orderData={comicData}/>
							</FormProvider>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);

}
(CheckoutPage as any).Layout = LayoutCheckout;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = parseInt(params?.id as string);
	const comic = await getComic(id);

	return {
		props: {
			comic
		},
		revalidate: 60
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

