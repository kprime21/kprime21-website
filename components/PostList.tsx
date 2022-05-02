import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'


//Holds projects
const PostList = styled.div`
    /* border: 5px solid yellow; */

    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    width:75%;
    max-width: 90em;
    margin:auto;
    margin-top:6em;

    @media only screen and (max-width: 550px) { //phone screens the Post cards will now appear larger

width: 100%;


}
`;

//Each Post is in a small box 
//Image
//Post Title
//Post Description
//Button to go to Post Page
const PostCard = styled.div`
background-color: #1db954;;
border-radius:8px;
/* decrease width to increase margin horizontal */
width:48%; 
position:relative;
margin: 1rem 0 2rem 0;
margin-top:2em;
margin-bottom:2em;
padding:  1.5rem;



h1{
    text-align:center ;
    color:white;

}
div{
    color:white;  
    font-size: 18px;
    font-weight: bold;
}
@media only screen and (max-width: 1500px) {
  
  width: 100%;

  div{
      font-size:20px;
  }


}
@media only screen and (max-width: 550px) {

    width: 100%;

  div{
      font-size:16px;
  }

}

`;

const ButtonLink = styled.button`
/* position:absolute;
bottom:0;
background-color:green; */

margin-top:3rem;
position:relative;
left: 50%;
padding: 1rem 2rem;
/* use to center button perfectly */
 -webkit-transform: translateX(-50%);
 -moz-transform: translateX(-50%);
transform: translateX(-50%);
color: white;
background-color:#16407B;
border: 5px solid #16407b;
display:inline-block;
font-size:1.2rem;
border-radius:35px;
cursor:pointer;

`;

const PostImageHolder = styled.div`
position:relative;
.image{
    border-radius: 10px;
}
`;

const ProjectTags = styled.div`
position:relative;

margin-bottom:1rem;
/* use to center button perfectly */

div{
    position:relative;
    margin:auto;

    width:fit-content;
    border: purple solid 5px;
    border-radius:35px;
    padding:0 2rem;
    text-align:center ;
    color:white;
}


`;


//Will display the Posts that I am currently working on
const Posts = (props) => {
    let { post, type } = props;



    return (
        <PostList>

            {(type == 'project') ?
                post.map(info => {
                    // console.log(info)
                    return (

                        <PostCard key={info.uid} >
                            <PostImageHolder>

                                <Image className='image' alt={info.data.ProjectImage.alt} src={info.data.ProjectImage.url} width='1920' height='1080' />

                            </PostImageHolder>
                            <h1>
                                {info.data.ProjectTitle}
                            </h1>
                            <ProjectTags>
                                <div>
                                    {info.data.ProjectTags[0].text}
                                </div>
                            </ProjectTags>
                            <div>
                                {info.data.ProjectInfo[0].text}
                            </div>
                            <a href={info.data.ProjectLink} target='_blank' rel="noreferrer">
                                <ButtonLink>
                                    VISIT WEBSITE
                                </ButtonLink>
                            </a>
                        </PostCard>
                    )
                })

                :

                post.map(info => {
                    return (
                        <PostCard key={info.uid}>
                            <PostImageHolder>

                                <Image className='image' src={info.data.BlogImage.url} width='1920' height='1080' />

                            </PostImageHolder>
                            <h1>
                                {info.data.BlogTitle+ ' | ' + info.data.BlogDate}
                            </h1>
                            <div>
                                {info.data.BlogPreview[0].text}
                            </div>
                            <Link href={`/blog/${info.uid}`}>
                                <ButtonLink>
                                    READ MORE
                                </ButtonLink>
                            </Link>
                        </PostCard>
                    )
                })}
    
        </PostList>
    );
};


export default Posts;