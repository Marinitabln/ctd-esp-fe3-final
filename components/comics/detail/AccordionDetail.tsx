import { FC } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Comic } from 'interfaces/comic';

interface Props {
    comic: Comic
}

const AccordionDetail: FC<Props> = ({ comic }) => {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Descripción</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {comic.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>Personajes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant='body2' color={'gray'}>
                        {comic.characters.items.map((character) => {
                            return `${character.name}, `
                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel3a-header"
                >
                    <Typography>Creadores</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body2' color={'gray'}>
                        {comic.creators.items.map((creator) => {
                            return `${creator.name}, `
                        })}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordionDetail