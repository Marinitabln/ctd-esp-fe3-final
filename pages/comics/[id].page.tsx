import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import { Comic } from 'interfaces/comic';
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import React from 'react'
import { Container } from '@mui/material';
import { getComic} from 'dh-marvel/services/marvel/marvel.service';;
import ComicDetail from 'dh-marvel/components/comics/detail/ComicDetail';

interface Props {
    comic: Comic;
}

const ComicPage: NextPage<Props> = ({ comic }) => {
    
    return (
        <>
            <Head>
                <title>DH Marvel</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BodySingle title={`Detalle de comic`}>
                <Container maxWidth="lg" sx={{ marginTop: '20px', marginBottom: '50px' }}>
                    <ComicDetail comic={comic} />
                </Container>
            </BodySingle>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
    const id = parseInt(params?.id as string);
	const comic = await getComic(id);    

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
      )
   
	return {
		props: {
			comic
		},
	}
}

/* export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = parseInt(params?.id as string);
	const comic = await getComic(id);
   
	return {
		props: {
			comic
		},
		revalidate: 60 * 60 * 24 //en 24hs hace la actualización
	}
}
export const getStaticPaths: GetStaticPaths = async () => {

	const data = await getComics();
	const paths = data.data.results.map((comic: Comic) => ({ params: { id: comic.id.toString() }}))

	return {
		paths,
		fallback: 'blocking',
	};
} */


export default ComicPage
