import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'


//Holds projects
const PostList = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    border: 5px solid yellow;
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
border: 5px red solid;
width:50%;
position:relative;
margin: 1rem 0 2rem 0;
margin-top:2em;
margin-bottom:2em;
padding:  2rem;

button{
    background-color:green;
    color: white;
    display:inline-block;
    font-size:16px;
}

h1{
    text-align:center ;
    color:white;
    font-family: 'VT323', monospace;

}
div{
    color:white;  
    font-family: 'VT323', monospace;
    font-size: 22px;
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
left: 50%;
/* use to center button perfectly */
 -webkit-transform: translateX(-50%);
 -moz-transform: translateX(-50%);
 transform: translateX(-50%);
position:absolute;
bottom:0;
`;

const PostImageHolder = styled.div`
position:relative;
`;

const ProjectTags = styled.div`
position:relative;
border: purple solid 5px;
div{
    text-align:center ;
    color:white;
    font-family: 'VT323', monospace;
}
`;


//Will display the Posts that I am currently working on
const Posts = (props) => {
    let { post, type } = props;



    return (
        <PostList>

            {(type == 'project') ?
                post.map(info => {
                    console.log(info)
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
                                    OK
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
                                    OK
                                </ButtonLink>
                            </Link>
                        </PostCard>
                    )
                })}
    
        </PostList>
    );
};


export default Posts;