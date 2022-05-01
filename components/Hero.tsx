import {useState, useEffect} from 'react'
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Kirjan from '../public/kirjan.jpg';
import Icon1 from '../public/k.png';
import Note from '../public/about.png';
import Computer from '../public/computer.png';
import CV from '../public/CV.png';



// Outer container
const HeroContainer = styled.div`
    margin:auto;
    width:80%;
    height:100%;
    position:relative;
    display:flex;
    flex-direction:column; 
    justify-content:flex-start;
    align-items:center;
    margin-top:10rem;
    
    
    @media only screen and (max-width: 890px) {
    flex-wrap: wrap;
 

}

`;

//Left Container - Uses Column
const HeroTop = styled.div`
/* border: 5px solid yellow; */
display:flex;
flex-direction: column;
justify-content: center;
align-items: center ;
color: white;
/* #1db954; */


@media only screen and (max-width: 890px) {
    margin:0;

}

h1{
    width: 100%;
    font-size: 4em;
    text-align: center;
}

.projects{
    font-family:Circular, sans-serif;
    font-size:24px;
    color:white;
    background-color:#1db954;    
    padding: 15px 50px;
    text-transform: uppercase;
    border-radius: 35px;
    box-shadow: 0 0 1px 0;
    cursor: pointer;

}
`;

//Top Container of Column
const HeroImagePicture = styled.div`
position:relative;
border: 3px solid #1db954;
border-radius: 50%;
width: 65%;
min-width:150px;





>span {
    position: unset !important;
}

.image {
    border-radius:50%;
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
}


`;




//Home page where my picture and some about me text is
const Hero = () => {

  

    
    return (
        <HeroContainer>
            <HeroTop>
                <HeroImagePicture>
                    <Image className='image' src={Kirjan} layout="fill" alt='MyPicture'/>
                </HeroImagePicture>
            <h1>
                Hi, I&apos;m Kirjan
            </h1>
            <Link  href='/projects' passHref>
                    <div className='projects'>Projects</div>
            </Link>
            </HeroTop>
         


        </HeroContainer>
    )
}

export default Hero;