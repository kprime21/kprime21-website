import styled from 'styled-components';
import Hero from './hero';

import Navbar from './navbar'
// import Footer from './footer'


export default function Layout({ children }){
    return(
        <>
            <Navbar />
            <Hero/>
                {/* <main>{children}</main> */}
            {/* <Footer /> */}
        </>
    )
}