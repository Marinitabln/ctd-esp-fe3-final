import { FC } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Comic } from 'interfaces/comic';
import AccordionDetail from './AccordionDetail';
import DataDetail from './DataDetail';
import ImageDetail from './ImageDetail';

interface Props {
  comic: Comic
}

const ComicDetail: FC<Props> = ({ comic }) => {

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
         <ImageDetail comic={comic}/>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <DataDetail comic={comic} />
            <Grid item>
              <AccordionDetail comic={comic} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ComicDetail