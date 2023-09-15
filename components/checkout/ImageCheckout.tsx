import { FC } from 'react'
import Image from 'next/image';
import Grid from '@mui/material/Grid'

interface Props {
    comicImage: string,
    comicTitle: string  
}

const ImageDetail: FC<Props> = ({ comicImage, comicTitle }) => {
    return (
       <Grid display={'flex'} justifyContent={'center'}>
         <Image
            src={comicImage ? comicImage : 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'}
            alt={comicTitle}
            width={300}
            height={400}
            priority={true} />
       </Grid>
    )
}

export default ImageDetail