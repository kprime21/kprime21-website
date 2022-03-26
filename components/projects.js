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


const ProjectImageHolder = styled.div`
width:48%;
position:relative;
margin: 1rem 0 2rem 0;
margin-top:2em;
margin-bottom:2em;
padding: 0 2rem;

@media only screen and (max-width: 1366px) {
  
    width: 100%;
    margin: 0.25rem;
  
}

@media only screen and (max-width: 550px) {

    margin: 0.25rem 0;
 
}




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
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
            <ProjectImageHolder>
                <Image className='image' src={Game} layout='fill'/>
            </ProjectImageHolder>
      

        </ProjectList>
    );
};


export default Projects;