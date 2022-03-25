import styled from 'styled-components';
import HeroImage from '../public/k.png';
import Image from 'next/image';


const HeroContainer = styled.div`
    margin:auto;
    margin-top:15rem;
    width:80%;
    height:100%;
    position:relative;
    background-image:url('/k.png');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 0 20%;


`;

const HeroSection = styled.div`
height: 800px;

`;

const HeroText = styled.div`
width:50%;
padding: 2em 0;
margin-left:50%;
position:relative;

h1{
    border: 10px solid white;
    font-family: 'VT323', monospace;
    color:white;
    font-size: 2em;
    margin: 0 auto 1rem auto;
    text-align:left;
    width:50%;
    
    
}
`;





const Hero = () => {
    return(
        <HeroContainer>
           <HeroSection>
             <HeroText>
                 <h1>
                Hi, my name is Kirjan
                 </h1>
             </HeroText>
            </HeroSection>
        </HeroContainer>
    )
}

export default Hero;