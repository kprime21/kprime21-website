import styled from 'styled-components';


const Foot = styled.div`

position:absolute;
width:100%;
height:5rem;
bottom:--1em;
left:0;
text-align: center;
p{
    color:white;
}
`;



const Footer = () => {

    return(
        <Foot>
            <p>a</p>
        </Foot>
        
    );
}


export default Footer;