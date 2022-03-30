import Head from 'next/head'
import { Container } from '../styles/Home'
import Projects from '../components/PostList'
import { createClient } from '../prismicio'


export async function getStaticProps({ProjectPost}){
  const client = createClient({ProjectPost})

  const page = await client.getAllByType('projectpost')

  return{
    props: {page},
  }

}


export default function ProjectsPage({page}) {
  return (
    <Container>
      <Head>
        <title>KPrime21: Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects post={page} type='project' />
    </Container>

  )
}

