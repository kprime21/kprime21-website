import Head from 'next/head'
import { Container } from '../styles/Home'
import Hero from '../components/Hero'
import {motion} from 'framer-motion'


export default function Home() {
  return (
    <Container>
      <Head>
        <title>KPrime21: Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Hero />
      </motion.div>
    </Container>

  )
}


