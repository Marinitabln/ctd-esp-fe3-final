import { FC } from 'react'
import Image from 'next/image';
import { Comic } from 'interfaces/comic';
import Grid from '@mui/material/Grid'

interface Props {
    comic: Comic,    
}

const ImageDetail: FC<Props> = ({ comic }) => {
    return (
       <Grid display={'flex'} justifyContent={'center'}>
         <Image
            src={comic?.images[0] ? `${comic?.images[0]?.path}.${comic?.images[0]?.extension}` : 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'}
            alt={comic?.title}
            width={300}
            height={400}
            priority={true} />
       </Grid>
    )
}

export default ImageDetail