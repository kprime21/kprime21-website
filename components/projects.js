import styled from 'styled-components';
import Image from 'next/image';
import Game from '../public/dungeoncrawler.png';


const ProjectList = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    border: 5px solid yellow;
    width:75%;
    max-width: 90em;
    margin:auto;
    margin-top:6em;

  

`;

const ProjectCard = styled.div`

border: 5px red solid;
width:50%;
position:relative;
margin: 1rem 0 2rem 0;
margin-top:2em;
margin-bottom:2em;
padding: 0 2rem;


h1{
    color:white;  
    font-family: 'VT323', monospace;
    font-size: 22px;
    font-weight: bold;
}


@media only screen and (max-width: 1366px) {
  
  width: 100%;
  margin: 0.25rem;
  h1{
      font-size:16px;
  }


}

@media only screen and (max-width: 550px) {

  margin: 0.25rem 0;

  h1{
      font-size:14px;
  }

}

`;


const ProjectImageHolder = styled.div`



>span {
    position: unset !important;
}

.image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
}

`;


const Projects = () => {

    return(
        <ProjectList>
            <ProjectCard>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <h1>
                hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
            </h1>
            </ProjectCard>     
            <ProjectCard>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <h1>
            hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
            </h1>
            </ProjectCard>     
            <ProjectCard>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <h1>
            hi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doinghi how ar eoyu doing
            </h1>
            </ProjectCard>     
         
            
      

        </ProjectList>
    );
};


export default Projects;