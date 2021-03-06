import Head from 'next/head'
import { Container } from '../styles/Home'
import Blogs from '../components/PostList'
import {createClient} from '../prismicio'
import { motion } from 'framer-motion'

let BlogInfo = {
  BlogImage: '/tree.png',
  BlogTitle: 'Playlist Combiner',
  BlogContent: 'This is a app written in Python, using the flask framework \
    to combine your Youtube and Spotify playlist and print it out in a list \
    without having to use the Spotify or Youtube API',
  BlogLink: 'https://github.com/kprime21/playlistcombiner',
}

export async function getStaticProps({BlogPost}){
  const client = createClient({BlogPost})

  const page = await client.getAllByType('blogpost')

  return{
    props: {page},
  }
}



export default function BlogPage({page}) {
  return (
    <Container>
      <Head>
        <title>KPrime21: Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Blogs post={page} type='blog' />
      </motion.div>
    </Container>

  )
}

