import styled from 'styled-components';
import Image from 'next/image';
import Github from '../public/github.gif';
import Prismic from '../public/prismic.svg';



const Foot = styled.div`

position:absolute;
width:50%;
margin-left:25%;
height:5rem;
bottom:--1em;
left:0;
text-align: center;
color:white;
border: 5px solid white;

p{
    color:white;
}
   

`;

const IconHolder = styled.div`
display:flex;
flex-direction:row ;
justify-content:center;


`;


const HoldImage = styled.div`
width:64px;
height:64px;
margin:auto;


`;


const Footer = () => {

    return(
        <Foot>
            <IconHolder>
                <HoldImage>
                    <Image src={Github} ></Image>
                </HoldImage>
                <HoldImage>
                    <Image src={Prismic} ></Image>
                </HoldImage>

        
            </IconHolder>
            <p>kprime21 2022</p>
        </Foot>
        
    );
}


export default Footer;