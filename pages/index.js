import Head from 'next/head'
import Image from 'next/image'
import {Container} from '../styles/Home'
import picture from '../public/k.png';
import styled from 'styled-components';

const ImageHolder = styled.div`
  width:32px;
  height:32px;
`;


export default function Home() {
  return (
    <Container>
      <Head>
        <title>KPrime21 Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> HELLO KPRIME</h1>
        <ImageHolder>
        <Image src ={picture}/>
        </ImageHolder>
    </Container>
    
  )
}


