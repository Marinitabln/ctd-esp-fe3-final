import { FC } from 'react'
import { Paper, Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Comic } from 'interfaces/comic';
import AccordionDetail from './AccordionDetail';

interface Props {
  comic: Comic
}

const ComicDetail: FC<Props> = ({ comic }) => {

 // console.log({ comic });

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={3}>
        <Grid item>
          <Image
            src={comic.images[0] ? `${comic?.images[0]?.path}.${comic?.images[0]?.extension}` : 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'}
            alt={comic?.title}
            width={300}
            height={400}
            priority={true} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle2" component="div">
                {comic?.series.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {comic?.series.name}
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
                <Button variant='contained' size="large" href={`/checkout/${comic.id}`} sx={{ marginTop: '20px' }}>Comprar</Button>
                :
                <Button variant='outlined' size="large" sx={{ marginTop: '20px' }} disabled >Comprar</Button>}
            </Grid>
            <Grid item>
              <AccordionDetail comic={comic} />
            </Grid>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ComicDetail