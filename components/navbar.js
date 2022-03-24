import styled from 'styled-components';
import "@fontsource/vt323"

const Menu = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center ;
    
    div{
        font-family: 'VT323', monospace;
        font-size: 32px;
        font-weight: bold;
        padding: 0 2rem;
        
    }
`;


const Navbar = () => {
    return (
    <Menu>
        <div>Home</div>
        <div>Projects</div>
        <div>Blog</div>
        <div>Contact</div>
    </Menu>
    );
}


export default Navbar;