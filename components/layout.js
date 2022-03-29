import styled from 'styled-components';
import Navbar from './navbar'
import Footer from './footer'

const LayoutHolder = styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
padding: 0 0 10rem;
position:relative;

`;

export default function Layout({ children }){
    return(
        <>
        <LayoutHolder>
            <Navbar />
            <main>{children}</main>
            <Footer />
            </LayoutHolder> 
        </>
    )
}