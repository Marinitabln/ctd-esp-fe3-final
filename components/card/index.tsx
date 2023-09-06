import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Comic } from 'interfaces/comic';

interface Props {
comic: Comic,
}

const ComicCard = ({comic}:Props)=>{

  const imagen = comic?.images[0]?.path
  console.log({imagen})

  return (
    <Card key={comic.id} sx={{ maxWidth: 345, height: 380 }}>
      <CardMedia        
        sx={{ height: 140 }}
       // image={comic.images[0] ? comic.images[0].path : '' }
        image={comic?.images[0]?.path}
        title={comic.title}
      />
      <CardContent  sx={{ height: 160 }}>
        <Typography gutterBottom variant="h5" component="div">
          {comic.title}
        </Typography>
      </CardContent>
      <CardActions style={{ display:'flex', justifyContent:'space-between', margin:'0 20px'}}>
        <Button variant='outlined' size="medium">Ver detalle</Button>
        <Button variant='contained' size="medium">Comprar</Button>
      </CardActions>
    </Card>
  );
}

export default ComicCard