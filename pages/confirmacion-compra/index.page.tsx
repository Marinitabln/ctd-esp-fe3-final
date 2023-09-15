import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ImageDetailOK from 'dh-marvel/components/checkout/ImageCheckout';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { CheckoutInput } from 'dh-marvel/features/checkout/checkout.types';


const ConfirmacionCompraPage = () => {

  const router = useRouter();
  const [dataCheckout, setDataCheckout] = useState<CheckoutInput>();
  useEffect(() => {
    const dataLocal = localStorage.getItem("checkoutData");
    if (dataLocal !== null) {
      const data = JSON.parse(dataLocal);
      setDataCheckout(data);
    } else {
      router.push("/");
    }
  }, [router]);

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: '#CDE0CD'
      }}
    >
      <Typography variant={'h4'} color={'gray'} textAlign={'center'} marginTop={'15px'}>¡Que disfrutes tu compra! =)</Typography>
      
      {dataCheckout ?
        <Grid container margin={'20px'} alignItems={'end'} width={'96%'}>
          <Grid item xs={12} md={6}>
            <ImageDetailOK comicImage={dataCheckout.orderData.comicImage} comicTitle={dataCheckout.orderData.comicTitle} />
            <Divider sx={{ margin: '15px' }} />
            <Typography variant='h5' textAlign={'center'}>{dataCheckout.orderData.comicTitle}</Typography>
          </Grid>
          <Grid item display={'flex'} justifyContent={'center'} margin={'auto'} paddingTop={'20px'}>
            <Paper sx={{
              backgroundColor: '#E1EDE0', p: 2, minWidth: 350

            }}>
              <Typography variant='h6'>DETALLE DE COMPRA</Typography>
              <Divider sx={{ marginTop: '15px', marginBottom: '15px' }} />
              <Typography variant='body1'>Importe abonado: ${dataCheckout.orderData.comicPrice}</Typography>
              <Divider sx={{ marginTop: '15px', marginBottom: '15px' }}/>
              <Typography variant='body1'>DATOS DE ENTREGA</Typography>
              <Typography variant='body2' fontWeight={700}>Comprador:</Typography>
              <Typography variant='body2'> {dataCheckout.personalData.name} {dataCheckout.personalData.lastName} </Typography>
              <Typography variant='body2' fontWeight={700}>Dirección de envío:</Typography>
              <Typography variant='body2'> {dataCheckout.deliveryAddress.address}, {dataCheckout.deliveryAddress.city}. {dataCheckout.deliveryAddress.state}. CP {dataCheckout.deliveryAddress.zipCode}  </Typography>
            </Paper>
          </Grid>
        </Grid>
        :
        <></>}
    </Paper>
  )
}
(ConfirmacionCompraPage as any).Layout = LayoutCheckout;

export default ConfirmacionCompraPage
