import { FC } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Comic } from 'interfaces/comic';
import { useRouter } from 'next/router';


interface Props {
    comic: Comic
  }

const DataDetail: FC<Props> = ({comic}) => {

    const router = useRouter()

    const handlePathCheckout = ()=>{   
      router.push(`/checkout?comicId=${comic.id}`)
    }
    

    return (
        <Grid item xs>
            <Typography gutterBottom variant="subtitle2" component="div">
                {`Serie: ${comic?.series.name}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {comic?.title}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: 'gray' }}>
                {comic?.stock !== 0 ? `Stock disponible: ${comic?.stock} unid` : 'Sin stock'}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ textDecoration: 'line-through', color: 'red' }}>
                {comic?.oldPrice !== 48 ? `Antes $${comic?.oldPrice}` : ''}
            </Typography>
            <Typography variant="h4" color="text.secondary">
                {`$${comic?.price}`}
            </Typography>
            {comic?.stock !== 0 ?
                <Button variant='contained' size="large" onClick={handlePathCheckout} sx={{ marginTop: '20px' }}>Comprar</Button>
                :
                <Button variant='contained' size="large" sx={{ marginTop: '20px' }} disabled >Comprar</Button>}
        </Grid>
    )
}

export default DataDetail