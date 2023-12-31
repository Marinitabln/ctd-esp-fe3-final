import BodySingle from 'dh-marvel/components/layouts/body/single/body-single'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next/types'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaqsType } from 'dh-marvel/components/faqs/faqsData';
import { getFaqs } from 'dh-marvel/services/faqs/faqs.service';

interface Props {
  faqs: FaqsType[]
}

const PreguntasFrecuentesPage: NextPage<Props> = ({ faqs }) => {
  return (
    <>
      <Head>
        <title>Preguntas frecuentes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Preguntas frecuentes"}>
        {faqs?.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body2' color={'gray'}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </BodySingle>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const faqs = await getFaqs()
  return {
    props: {
      faqs
    }
  }
}

export default PreguntasFrecuentesPage
