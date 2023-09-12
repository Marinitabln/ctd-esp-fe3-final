import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout'
import { NextPage } from 'next';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ImageDetail from 'dh-marvel/components/comics/detail/ImageDetail';
import Divider from '@mui/material/Divider';
import { Comic } from 'interfaces/comic';
import Grid from '@mui/material/Grid';


const ConfirmacionCompraPage: NextPage = () => {

  const comic: Comic =
  {
    "id": 82967,
    "title": "Marvel Previews (2017)",
    "description": "",
    "pageCount": 112,
    "textObjects": [],

    "series": {
      "resourceURI": "http://gateway.marvel.com/v1/public/series/23665",
      "name": "Marvel Previews (2017 - Present)"
    },
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      "extension": "jpg"
    },
    "images": [],
    "creators": {
      "available": 1,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/creators",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/10021",
          "name": "Jim Nausedas",
          "role": "editor"
        }
      ],
      "returned": 1
    },
    "characters": {
      "available": 0,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/characters",
      "items": [],
      "returned": 0
    },
    "stories": {
      "available": 2,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/stories",
      "items": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/183698",
          "name": "cover from Marvel Previews (2017)",
          "type": "cover"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/183699",
          "name": "story from Marvel Previews (2017)",
          "type": "interiorStory"
        }
      ],
      "returned": 2
    },
    "events": {
      "available": 0,
      "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/events",
      "items": [],
      "returned": 0
    }
  }



  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 900,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#CDE0CD'
      }}
    >
      <Typography variant={'h4'} color={'gray'} textAlign={'center'} marginTop={'15px'}>¡Que disfrutes tu compra! =)</Typography>

      <Grid container margin={'20px'} alignItems={'end'}>
        <Grid item xs={12} md={6}>
          <ImageDetail comic={comic} />
          <Divider sx={{ margin: '15px' }} />
          <Typography variant='h5' textAlign={'center'}>{comic.title}</Typography>
        </Grid>
        <Grid item display={'flex'} justifyContent={'center'} margin={'auto'} paddingTop={'20px'}>
          <Paper sx={{
            backgroundColor: '#E1EDE0', p: 2, minWidth: 350

          }}>
            <Typography variant='h6'>DETALLE DE COMPRA</Typography>
            <Divider sx={{ margin: '15px' }} />
            <Typography variant='body1'>Importe abonado: ${comic.price}</Typography>
            <Divider sx={{ margin: '15px' }} />
            <Typography variant='body1'>DATOS DE ENTREGA</Typography>
            <Typography variant='body2'>Comprador: </Typography>
            <Typography variant='body2'>Dirección de envío: </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  )
}
(ConfirmacionCompraPage as any).Layout = LayoutCheckout;

export default ConfirmacionCompraPage
