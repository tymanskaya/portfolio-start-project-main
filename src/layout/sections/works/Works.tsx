import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import projectaImg from "../../../assets/images/project1.webp";
import projectbImg from "../../../assets/images/project.webp";
import projectcImg from "../../../assets/images/project3.webp";
import projectdImg from "../../../assets/images/project4.webp";
import projecteImg from "../../../assets/images/project5.webp";
import projectfImg from "../../../assets/images/project6.webp";
import {Title} from "../../../components/Title";
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"


const workData = [
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        tech: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectaImg
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        tech: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectbImg
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        tech: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectcImg
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        tech: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectdImg
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        tech: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projecteImg
    },
    {
        title: 'Project Tile goes here',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        tech: 'Tech stack : HTML , JavaScript, SASS, React',
        src: projectfImg
    }
]
export const Works: React.FC= () => {
    return (
       <S.Works id={"projects"}>
           <Container>
           <SectionTitle>Projects</SectionTitle>
           <Title>Things I’ve built so far</Title>
           <FlexWrapper wrap={'wrap'} justify={'space-between'} >
               {workData.map((w, index) => {
                   return <Work title={w.title}
                                text={w.text}
                                tech={w.tech}
                                src={w.src}/>
               })}
           </FlexWrapper>
       </Container>
       </S.Works>
    );
};

