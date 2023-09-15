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
import { NextPage } from 'next';
import { getComicById } from 'dh-marvel/services/marvel/marvel.service';
import { Comic, IComicData } from 'interfaces/comic';
import { useRouter } from 'next/router'
import Spinner from 'dh-marvel/components/spinner/Spinner'
import { FormProvider } from 'react-hook-form'




const CheckoutPage: NextPage = () => {

	const [comicData, setComicData] = useState<Comic>()
	const [orderData, setOrderData] = useState<IComicData>()

	const router = useRouter();
	const { comicId } = router.query;


	useEffect(() => {

		const id = Number(comicId);

		if (comicId) {
			getComicById(id).then((comic) => {
				setComicData(comic)
				setOrderData({
					comicImage: `${comic.images[0].path}.${comic.images[0].extension}`,
					comicTitle: comic.title,
					comicPrice: comic.price
				})
			})
		}
		else {
			router.push('/')
		}
	}, [comicId, router])


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
							{comicData ?
								<>
									<ImageDetail comic={comicData} />
									<Divider sx={{ margin: '15px' }} />
									<Typography>{comicData.title}</Typography>
									<Divider sx={{ margin: '15px' }} />
									<Typography variant='body2'>Total a pagar: ${comicData.price}</Typography>
								</>
								:
								<Spinner />
							}
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
							{orderData && <FormStepperCheckout orderData={orderData} />}
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);

}
(CheckoutPage as any).Layout = LayoutCheckout;


export default CheckoutPage

