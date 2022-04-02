import styled from 'styled-components';
import Image from 'next/image';
import Github from '../public/github.gif';




const Foot = styled.div`
/* border: 10px solid blue; */

//must have parent div in a flex box in order to stay at the bottom for pages that are longer than the page width (scrollbar)

position:absolute;
/* background-color:navy; */
width:100%;
margin:auto;
bottom:0;
left:0;


display:flex;
flex-direction:column ;
align-items:center;


text-align: center;
color:white;



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

//Footer
const Footer = () => {

    return (
        <Foot>
            <IconHolder>
                <a href = 'https://github.com/kprime21' target = '_blank' rel="noreferrer">
                <HoldImage>
                    <Image src={Github} alt='GithubLogo'></Image>
                </HoldImage>
                </a>
                <a href = 'https://github.com/kprime21' target = '_blank rel="noreferrer"'>
                <HoldImage>
                    <Image src={Github} alt='GithubLogo'></Image>
                </HoldImage>
                </a>
                <a href = 'https://github.com/kprime21' target = '_blank' rel="noreferrer">
                <HoldImage>
                    <Image src={Github} alt='GithubLogo'></Image>
                </HoldImage>
                </a>
                <a href = 'https://github.com/kprime21' target = '_blank' rel="noreferrer">
                <HoldImage>
                    <Image src={Github} alt='GithubLogo'></Image>
                </HoldImage>
                </a>
            </IconHolder>
            
            <div>kprime21 @2022</div>
        </Foot>

    );
}


export default Footer;