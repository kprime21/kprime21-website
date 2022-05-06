import styled from 'styled-components';
import Navbar from './Navbar'
import Footer from './Footer'


//Flex display is used so the footer will stay at the bottom
const LayoutHolder = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
padding: 0 0 10rem;
position:relative;


`;
//The layout template that will be reused 
export default function Layout({ children }) {
    return (
        <>
            <LayoutHolder>
                <Navbar stuff={children} />
                <main>{children}</main>
                <Footer />
            </LayoutHolder>
        </>
    )
}