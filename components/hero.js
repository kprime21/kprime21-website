import styled from 'styled-components';
import Kirjan from '../public/kirjan.jpg';
import Icon1 from '../public/k.png';
import Image from 'next/image';

// Outer container
const HeroContainer = styled.div`
    margin:auto;
    margin-top:10rem;
    width:80%;
    height:100%;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:flex-start;
    
    @media only screen and (max-width: 890px) {
    
    justify-content:center ;
    align-items:center ;

    flex-wrap: wrap;

}

`;

//Left Container - Uses Column
const HeroLeft = styled.div`
width:20%;
min-width:400px;
margin-right: 5rem;
margin:auto;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center ;
border: 5px solid yellow;

@media only screen and (max-width: 890px) {
    
    margin-right:0;
    margin-left:0;

}


`;

//Top Container of Column
const HeroImagePicture = styled.div`
position:relative;
border: 3px solid white;
border-radius: 5px;
width: 20%;
min-width:300px;



>span {
    position: unset !important;
}

.image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
}


`;
//Bottom Container of Column
const HeroTextL = styled.div`
padding: 2em 2em;
position:relative;


 h1{
     
    border: 3px solid white;
    border-radius: 5px;
    font-family: 'VT323', monospace;
    font-weight:500;
    color:white;
    font-size: 2em;
    margin: 0 auto 1rem auto;
    padding: 1rem 1rem;
 }

`;


//Right Container - Uses Column
const HeroRight = styled.div`

min-width:500px;
margin-right: 5rem;

display:flex;
flex-direction: column;
justify-content: center;
align-items: center ;

border: 5px solid yellow;
@media only screen and (max-width: 890px) {
    
    margin-right:0;
    margin-left:0;

}
`;

//Text container of right column
const HeroTextR = styled.div`
padding: 0 5em;
position:relative;
margin-bottom:auto;





h1{
    border: 3px solid white;
    border-radius: 10px;
    font-family: 'VT323', monospace;
    font-weight:500;
    color:white;
    font-size: 2em;
    margin: 0 auto 1rem auto;
    text-align:left; 
    padding: 1rem 1rem;


    width:100%;
    
    
}
`;

//Image container of right column
const HeroIconPicture = styled.div`

    margin-top:3rem;

    display:flex;
    flex-direction:row ;
    justify-content:center;
    
    

    
    border: 5px solid white;
    border-radius: 5px;
`;

//Container for each seperate icon
const HoldIcon = styled.div`
    height:64px;
    width:64px;
    margin-left:1rem;
    margin-right:1rem;
    cursor:pointer;
`;


//Home page where my picture and some about me text is
const Hero = () => {
    return (
        <HeroContainer>
            <HeroLeft>
                <HeroImagePicture>
                    <Image className='image' src={Kirjan} layout="fill" />
                </HeroImagePicture>

                <HeroTextL>
                    <h1>
                        Hi! My name is Kirjan

                    </h1>

                </HeroTextL>
            </HeroLeft>
            <HeroRight>
                <HeroTextR>
                    <h1>
                        I am a Computer Engineering Student and am an avid coder

                        <p>
                            I am experienced in C/C++/NextJS/Flask
                        </p>


                        <p>
                            My interests are Game Development, ROM Hacking and Reverse Engineering retro games
                        </p>
                    </h1>


                </HeroTextR>
                <HeroIconPicture>
                    <HoldIcon>
                        <Image src={Icon1}></Image>
                    </HoldIcon>
                    <HoldIcon>
                        <Image src={Icon1}></Image>
                    </HoldIcon>
                    <HoldIcon>
                        <Image src={Icon1}></Image>
                    </HoldIcon>
                    <HoldIcon>
                        <Image src={Icon1}></Image>
                    </HoldIcon>

                </HeroIconPicture>

            </HeroRight>


        </HeroContainer>
    )
}

export default Hero;