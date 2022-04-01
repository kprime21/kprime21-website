import styled from 'styled-components';
import Image from 'next/image';


//Set the area for the blogpost to be 60% of the screen and centered
//Image
//Title | Date
//Blogpost Content
const SingleBlogPost = styled.div`
width:60%;

margin:auto;
margin-top:8rem;
margin-bottom:5rem;
position:relative;

border: turquoise 5px solid;

`;
//Blog title and the date will be directly under the image
const BlogTitle = styled.div`
display:flex;
flex-direction:column;
padding: 1.5rem 0 .5rem;

background:navy;
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
border: 5px white solid;
border-radius:5px;

color:white;
background-color:blue ;
`

//The actual blogpost content
const Article = styled.div`
position:relative;
width:80%;
margin:auto;
border: 5px pink solid;
p{
    word-wrap:break-word;
    margin:1.75rem 0;
}


`;
//Holds the image and makes the image have 100% width but has max height set and picture will be cropped from the bottom
const ProjectlistImageHolder = styled.div`

display:flex;



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
    return (
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
                        {article.data.BlogContent[0].text}
                    </p>
                </Article>
            </BlogText>
        </SingleBlogPost>
    );
}

export default BlogPost