import styled from 'styled-components';
import HeroImage from '../public/k.png';
import Image from 'next/image';


const HeroContainer = styled.div`
    margin:auto;
    margin-top:15rem;
    margin-bottom:15rem;
    width:80%;
    height:100%;
    position:relative;
    background-image:url('/retro.gif');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: 0% 0%;
    

`;

const HeroSection = styled.div`
 min-height:100%;

`;

const HeroText = styled.div`
width:50%;
padding: 2em 0;
margin-left:45%;
position:relative;

h1{
    border: 3px solid white;
    font-family: 'VT323', monospace;
    color:white;
    font-size: 2em;
    margin: 0 auto 1rem auto;
    text-align:left;
    width:50%;
    border-radius: 5px;
    font-weight:500;
    padding: 1rem 1rem;
    position:relative;
    word-wrap:break-word;
    
}
/* h1::before{
    content:"";
    position: absolute;
    top:10px;
    left:-12px;
    margin:auto;
    height: 18px;
    width: 18px;
    
    border-right: solid #fff;
    border-top: solid#fff;
    border-bottom:solid #000;
    border-left:solid #000;
    transform:rotate(225deg);
    background-color: #000; 
} */
`;





const Hero = () => {
    return(
        <HeroContainer>
           
             <HeroText>
                 <h1>
                Hi, my name is Kiren
                    <p>
                        I am a computer engineer

                        I enjoy making web dev projects, game devleopment, and 
                    </p>

                    <HeroSection>
                    <p>
                        I am a computer engineer

                        I enjoy making web dev projects, game devleopment, and 
                    </p>
                    <p>
                        I am a computer engineer

                        I enjoy making web dev projects, game devleopment, and 
                    </p>
                    </HeroSection>
                 </h1>
            
             </HeroText>
           
        </HeroContainer>
    )
}

export default Hero;