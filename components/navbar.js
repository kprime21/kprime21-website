import styled from 'styled-components';
import "@fontsource/vt323";
import Link from 'next/link';
import Image from 'next/image';
import picture from '../public/k.png'



const Menu = styled.div`
    background-color: darkolivegreen;
    top:0;
    display:flex;
    position:fixed;
    justify-content:space-around;
    align-items:center;
    width:100%;
    z-index:100;

    border:5px solid green;
`;
const TextBox = styled.div`
        border: 2px white solid;
        border-radius:5px;
        display:flex;
        margin-top:1rem;
        margin-bottom:1rem;
        padding: 1rem 1.5rem 1rem;
        div{
        color:#fff;
        font-family: 'VT323', monospace;
        font-size: 22px;
        font-weight: bold;
        padding: 0 2rem;
        cursor:pointer;

        @media (max-width:640px){
            padding:0 1rem;
    }
    }
`;
// used to hold the image at the top left of the screen
// NextJS image component is wrapped in a Span element and it's position is set to absolute so it can be displayed as whole on the top left of the screen
// Read More : https://github.com/vercel/next.js/discussions/18739
const ImageHolder = styled.div`
    > span{
        max-width:64px;
        max-height:64px;
    }
    position:absolute;
    top:1rem;
    left:0;
    width:64px;
    height:64px;

    @media (max-width:640px){
        display:none;
    }
    
`;
//The navbar that will stay fixed at the top of the screen
const Navbar = () => {
    return (
        <Menu>
            <ImageHolder>
                <Image src={picture}></Image>
            </ImageHolder>
            <TextBox>
                <Link href='/'>
                    <div>Home</div>
                </Link>
                <Link href='/projects'>
                    <div>Projects</div>
                </Link>
                <Link href='/blog'>
                    <div>Blog</div>
                </Link>
                <Link href='/contact'>
                    <div>Contact</div>
                </Link>
            </TextBox>
        </Menu>
    );
}

export default Navbar;