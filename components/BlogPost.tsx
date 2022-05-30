import styled from 'styled-components';
import Image from 'next/image';
import { RichText } from 'prismic-reactjs'
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion'




//Set the area for the blogpost to be 60% of the screen and centered
//Image
//Title | Date
//Blogpost Content
const SingleBlogPost = styled.div`
/* border: turquoise 5px solid; */

max-width:1920px;
width:60%;
margin:auto;
margin-top:8rem;
margin-bottom:5rem;
position:relative;
display:flex;
flex-direction:column;
align-items:center;



@media only screen and (max-width: 550px) { //phone screens the Blog post will take 100% width
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1003)'%3e%3c/rect%3e%3cpath d='M1440 0L942.0799999999999 0L1440 80.11z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M942.0799999999999 0L1440 80.11L1440 316.79L783.28 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M783.28 0L1440 316.79L1440 413.06L656.23 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M656.23 0L1440 413.06L1440 480.49L265.5 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L277.05 560L0 400.63z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 400.63L277.05 560L388.16 560L0 205.54z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 205.53999999999996L388.16 560L500.64000000000004 560L0 193.30999999999997z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 193.30999999999995L500.64000000000004 560L982.74 560L0 109.51999999999994z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1003'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
width: 100%;
}

`;
//Blog title and the date will be directly under the image
const BlogTitle = styled.div`
/* background:navy; */

display:flex;
flex-direction:column;
padding: 1.5rem 0 .5rem;
background-color:#111111;

z-index:-1;


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
//Wraps the blogpost content 
const BlogText = styled.div`
/* background-color:blue ; */
background-color:#111111;
width:100%;
border: 5px white solid;
border-radius:5px;
color:white;

`

//The actual blogpost content
const Article = styled.div`
/* border: 5px pink solid; */

position:relative;
width:80%;
margin:auto;
p{
    word-wrap:break-word;
    margin:1.75rem 0;
}


@media only screen and (max-width: 550px) { //phone screens the Blog post will take 100% width

width: 90%;
}


`;
//Holds the image and makes the image have 100% width but has max height set and picture will be cropped from the bottom
const ProjectlistImageHolder = styled.div`

display:flex;
margin-bottom:1rem;



>span {
    position: unset !important;
    max-height: 400px;
   
}

.image {
    object-fit: cover;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
}

`
//Holds blogpost that will be on a static page [slug]
const BlogPost = (props) => {
    let {article} = props
    const rawMarkdown = RichText.asText(article.data.BlogContent)
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SingleBlogPost key = {article.uid}>

            <ProjectlistImageHolder>
                <Image className='image' alt = {article.data.BlogImage.alt} src={article.data.BlogImage.url} layout='fill' />
            </ProjectlistImageHolder>
            <BlogText>
                <BlogTitle>
                    <h1>{article.data.BlogTitle}</h1>
                    <h2>{article.data.BlogDate}</h2>
                </BlogTitle>
                <Article>
                    <p>
                   <ReactMarkdown>
                       {rawMarkdown}
                   </ReactMarkdown>
                   </p>
                </Article>
            </BlogText>
        </SingleBlogPost>
        </motion.div>
    );
}

export default BlogPost