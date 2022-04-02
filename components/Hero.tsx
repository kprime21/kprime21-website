import {useState, useEffect} from 'react'
import styled from 'styled-components';
import Kirjan from '../public/kirjan.jpg';
import Icon1 from '../public/k.png';
import Image from 'next/image';
import React from 'react';

// Outer container
const HeroContainer = styled.div`
    margin:auto;
    margin-top:10rem;
    width:80%;
    height:100%;
    position:relative;
    display:flex;
    flex-direction:column; //trying out column
    justify-content:space-evenly;
    align-items:center;
    
    @media only screen and (max-width: 890px) {
    
    justify-content:center ;
    align-items:center ;

    flex-wrap: wrap;
 

}

`;

//Left Container - Uses Column
const HeroLeft = styled.div`
/* border: 5px solid yellow; */

width:20%;
min-width:400px;
margin-right: 5rem;
margin:auto;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center ;


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
/* border: 5px solid yellow; */

min-width:600px;
margin-right: 5rem;
margin:auto;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center ;


@media only screen and (max-width: 890px) {
    /* for mobile decrease min width to center textbox */
    min-width:400px;
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
@media only screen and (max-width: 890px) {
    
    padding: 0 2em;

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

    //Setup About Me
    interface Mumble{
        what: string;
        strengths: string;
        experience: string;
    };
    
    let Biography: Mumble[] = [
        {
            what:'I\'m a Computer Engineering Student and am an avid coder',
            strengths:'I\'m experienced in C/C++/NextJS/Flask',
            experience:'My interests include Cyber Security, ROM Hacking and Reverse Engineering',
        },
        {
            what:'I enjoy writing high level software projects',
            strengths:'I mainly write in Javascript, Java and Python',
            experience:'My software projects on web development, game development and automation',
        },
        {
            what:'I\'m currently learning how to write low level software',
            strengths:'I\'ve been using Rust/C/C++',
            experience:'My interests for low level software are in emulator and OS development',
        },
        {
            what:'I\'m a Computer Engineering Student and am an avid coder',
            strengths:'I\'m experienced in C/C++/NextJS/Flask',
            experience:'My interests include Cyber Security, ROM Hacking and Reverse Engineering',
        },]

    const [value, setValue] = React.useState(Biography[0]);
    
    const ChangeHeroText = event => {
        switch(event.target.alt){
            case 'icon1':
                setValue(Biography[0]);
                break;
            case 'icon2':
                setValue(Biography[1]);
                break;
            case 'icon3':
                setValue(Biography[2]);
                break;
            case 'icon4':
                setValue(Biography[3]);
                break;
            default:
                break;
    }
    };

    



    
    return (
        <HeroContainer>
            <HeroLeft>
                <HeroImagePicture>
                    <Image className='image' src={Kirjan} layout="fill" alt='MyPicture'/>
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
                        {value.what}

                        <p>
                            {value.strengths}
                        </p>


                        <p>
                            {value.experience}
                        </p>
                    </h1>


                </HeroTextR>
                <HeroIconPicture>
                    <HoldIcon onClick={ChangeHeroText}>
                        <Image src={Icon1} alt='icon1'></Image>
                    </HoldIcon>
                    <HoldIcon onClick={ChangeHeroText}>
                        <Image src={Icon1} alt='icon2'></Image>
                    </HoldIcon>
                    <HoldIcon onClick={ChangeHeroText}>
                        <Image src={Icon1} alt='icon3'></Image>
                    </HoldIcon>
                    <HoldIcon onClick={ChangeHeroText}>
                        <Image src={Icon1} alt='icon4'></Image>
                    </HoldIcon>

                </HeroIconPicture>

            </HeroRight>


        </HeroContainer>
    )
}

export default Hero;