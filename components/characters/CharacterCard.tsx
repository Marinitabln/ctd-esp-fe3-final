import { Character } from 'interfaces/comic'
import { FC } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ComicsCharacter from './ComicsCharacter'



interface Props {
  character: Character
}

const CharacterCard: FC<Props> = ({ character }) => {
  return (

    <Grid container spacing={2}>
      <Grid item xs={12} md={6} margin={'auto'}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="500"
            image={character?.thumbnail ? `${character?.thumbnail?.path}.${character?.thumbnail?.extension}` : 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'}
            alt={character.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character?.description ? character.description : 'La biografìa del personaje no está disponible'}
            </Typography>
          </CardContent>
        </Card>

      </Grid>
      <Grid item xs={12} md={6}>
        <ComicsCharacter character={character} />
      </Grid>
    </Grid>

  )
}

export default CharacterCard