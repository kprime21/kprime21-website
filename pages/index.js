import Head from 'next/head'
import { Container } from '../styles/Home'
import Hero from '../components/hero'





export default function Home() {
  return (
    <Container>
      <Head>
        <title>KPrime21: Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Container>

  )
}


