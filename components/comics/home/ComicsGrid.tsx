import { FC } from 'react'
import { Grid, Container, Pagination, Box } from '@mui/material';
import ComicCard from './ComicCard';
import { Comics } from 'interfaces/comic';


interface Props {
    comics: Comics
}

const ComicGrid: FC<Props>  = ({comics}) => {

const comicsArray = comics?.data.results

  return (
    <Grid container spacing={2}>
    {/* {comicsArray?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((comic) => (*/} 
          {comicsArray?.map((comic) => (
         <Grid item xs={12} sm={6} md={4} key={comic.id}>
             <ComicCard comic={comic} />
         </Grid>
     ))}
 </Grid>
  )
}

export default ComicGrid