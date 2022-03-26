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
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`;

const HeroTextL = styled.div`
padding: 2em 0;
position:relative;
 
 h1{
    border: 3px solid white;
    border-radius: 5px;
    font-family: 'VT323', monospace;
    font-weight:500;
    color:white;
    font-size: 2em;
    margin: 0 auto 1rem auto;
    text-align:left;
    padding: 1rem 1rem;
    position:relative;

    width:45%;
 }

`;

const HeroTextR = styled.div`
padding: 2em 0;
position:relative;
margin-bottom:auto;


h1{
    border: 3px solid white;
    border-radius: 5px;
    font-family: 'VT323', monospace;
    font-weight:500;
    color:white;
    font-size: 2em;
    margin: 0 auto 1rem auto;
    text-align:left; 
    padding: 1rem 1rem;
    position:relative;

    width:100%;
    
    
}
`;





const Hero = () => {
    return(
        <HeroContainer>
           <HeroTextL>
               <h1>
                   yo!
                   <p>
                        I am a computer engineer

                        I enjoy making web dev projects, game devleopment, and 
                    </p>
                    <p>
                        I am a computer engineer

                        I enjoy making web dev projects, game devleopment, and 
                    </p>
               </h1>
                    
            </HeroTextL>
             <HeroTextR>
                 <h1>
                Hi, my name is Kiren
                    <p>
                        I am a computer engineer

                        I enjoy making web dev projects, game devleopment, and 
                    </p>

                    
                 </h1>
            
             </HeroTextR>
           
        </HeroContainer>
    )
}

export default Hero;