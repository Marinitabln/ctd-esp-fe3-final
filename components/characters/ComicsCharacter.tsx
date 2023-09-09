import { FC, useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import { Character, Comic, Comics } from 'interfaces/comic';
import Box from '@mui/material/Box'
import ComicCard from '../comics/home/ComicCard';
import { getComicsByCharacterId } from 'dh-marvel/services/marvel/marvel.service';

interface Props {
    character: Character,
}

const ComicsCharacter: FC<Props> = ({ character }) => {

    const comicsArray = character.comics.items
    const [arrayComics, setArrayComics] = useState<Comics>()

    const getComicsCharacter = async (id:number) => {
        const comics = await getComicsByCharacterId(id, 6)
        return comics;
    }

/*     useEffect(()=>{
      const comics = getComicsCharacter(character?.id)
        setArrayComics(comics)
    }, []) */

    console.log({arrayComics});
    

    return (
        <Box sx={{ backgroundColor: 'GrayText' }}>
            <Typography gutterBottom variant="h6" component="div" sx={{ color: 'whitesmoke', textAlign: 'center' }}>
                Comics en los que aparece el personaje
            </Typography>
            {arrayComics?.data.results.map((comic : Comic) => {
                return (<li key={comic.id}><ComicCard comic={comic} /></li>)
            })}


        </Box>



    )
}

// hacer getStaticProps y Paths, pasar por props los comics asociados. Hacer servicio




export default ComicsCharacter


