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

    @media only screen and (max-width: 1366px) {

        width:100%;
        margin: 0.25rem;
  }
  

`;


const ProjectImageHolder = styled.div`
position:relative;
margin: auto;
max-width:600px;
margin-top:2em;
margin-bottom:2em;


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