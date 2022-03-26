import styled from 'styled-components';
import Image from 'next/image';
import Github from '../public/github.gif';
import Prismic from '../public/prismic.svg';



const Foot = styled.div`

position:absolute;
width:50%;
margin-left:25%;
bottom:--1em;
left:0;


display:flex;
flex-direction:column ;
align-items:center;


text-align: center;
color:white;
border: 10px solid blue;


div{
    font-family: 'VT323', monospace;
    color:white;
}
   

`;

const IconHolder = styled.div`
border:5px solid white;
border-radius: 5px;
display:flex;
margin-bottom:5px;



`;


const HoldImage = styled.div`
margin:0 0.5rem;
width:32px;
height:32px;



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
            <IconHolder>
                <HoldImage>
                    <Image src={Github} ></Image>
                </HoldImage>
                <HoldImage>
                    <Image src={Prismic} ></Image>
                </HoldImage>        
            </IconHolder>
            <div>kprime21 @2022</div>
        </Foot>
        
    );
}


export default Footer;