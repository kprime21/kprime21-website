import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'
import Game from '../public/dungeoncrawler.png';
import Tree from '../public/tree.png';


//Holds projects
const ProjectList = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    border: 5px solid yellow;
    width:75%;
    max-width: 90em;
    margin:auto;
    margin-top:6em;

    @media only screen and (max-width: 550px) { //phone screens the project cards will now appear larger

width: 100%;


}
`;

//Each project is in a small box 
//Image
//Project Title
//Project Description
//Button to go to Project Page
const ProjectCard = styled.div`

border: 5px red solid;
width:50%;
position:relative;
margin: 1rem 0 2rem 0;
margin-top:2em;
margin-bottom:2em;
padding: 0 2rem;

button{
    background-color:green;
    color: white;
    display:inline-block;
    font-size:16px;
}

h1{
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
const ProjectImageHolder = styled.div`
position:relative;

/* 
//If using wrapper then images will have to be the same aspect ratio, must use a pipe to resize
>span {
    position: unset !important;
}

.image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
} */

`;


//Will display the projects that I am currently working on
const Projects = (props) => {
    let { ProjectImage, ProjectTitle, ProjectContent, ProjectLink } = props.propss;


    return (
        <ProjectList>
            <ProjectCard>
                <ProjectImageHolder>

                    <Image className='image' src={ProjectImage} width='1920' height='1080' />

                </ProjectImageHolder>
                <h1>
                    {ProjectTitle}
                </h1>
                <div>
                    {ProjectContent}
                </div>
                <Link href={ProjectLink}>
                    <button>
                        OK
                    </button>
                </Link>

            </ProjectCard>
            <ProjectCard>
                <ProjectImageHolder>
                    <Image className='image' src={Tree} width='1920' height='1080' />
                </ProjectImageHolder>
                <h1>
                    HELLO
                </h1>
                <div>
                    hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
                    hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
                    hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
                    hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
                    hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
                </div>
                <button>
                    OK
                </button>
            </ProjectCard>
            <ProjectCard>
                <ProjectImageHolder>
                    <Image className='image' src={Game} width='1920' height='1080' />
                </ProjectImageHolder>
                <h1>
                    HELLO
                </h1>
                <div>
                    hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
                    hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
                    hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
                    hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
                </div>
                <button>
                    OK
                </button>
            </ProjectCard>




        </ProjectList>
    );
};


export default Projects;