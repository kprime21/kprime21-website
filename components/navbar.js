import styled from 'styled-components';
import "@fontsource/vt323";
import Image from 'next/image';
import picture from '../public/github-logo.gif'



const Menu = styled.div`
    display:flex;
    position:relative;
    justify-content:space-around;
    align-items:center;


    
    
    
`;

const TextBox = styled.div`
        border: 2px white solid;
        border-radius:5px;
        display:flex;
        margin-top:1rem;
        padding: 1rem 1.5rem 1rem;
        div{
        color:#fff;
        font-family: 'VT323', monospace;
        font-size: 32px;
        font-weight: bold;
        padding: 0 2rem;
        
    }
`;

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
    
`;



const Navbar = () => {
    return (
        <Menu>
            <ImageHolder>
                <Image src={picture}></Image>
            </ImageHolder>
            <TextBox>
                <div>Home</div>
                <div>Projects</div>
                <div>Blog</div>
                <div>Contact</div>
            </TextBox>
        </Menu>
    );
}


export default Navbar;