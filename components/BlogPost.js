import styled from 'styled-components';
import Image from 'next/image';
import Picture from '../public/tree.png';

const SingleBlogPost = styled.div`
width:60%;
margin:auto;
margin-top:8rem;
margin-bottom:5rem;
position:relative;

border: 5px white solid;
border-radius:5px;

color:white;
background-color:blue ;

`;

const BlogTitle = styled.div`
display:flex;
flex-direction:column;
padding: 1.5rem 0 .5rem;

background:navy;
z-index:-1;

border-left: 1px solid navy;
border-right: 1px solid navy;

h1{
    margin:0;
    padding:0 1rem;
    text-align: center;
}
h2{
    line-height:2;
    text-align: center;
    margin: 0 0 .5rem;
}



`;



const BlogPost = () => {
    return(
        <SingleBlogPost>
            <Image src={Picture} width='1920' height ='1080' objectFit='cover' ></Image>
            <BlogTitle>
                <h1>First Blog Post</h1>
                <h2>March 29 2022 | Kirjan</h2>
            </BlogTitle>
            asasasasassasas
        </SingleBlogPost>
    );
}

export default BlogPost