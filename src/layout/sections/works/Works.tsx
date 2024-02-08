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


export const Works = () => {
    return (
       <StyledWorks>
           <Container>
           <SectionTitle>Projects</SectionTitle>
           <Title>Things I’ve built so far</Title>
           <FlexWrapper wrap={'wrap'} justify={'space-between'}>
               <Work title={'Project Tile goes here'}
                     text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                     tech={'Tech stack : HTML , JavaScript, SASS, React'}
                     src={projectaImg}/>
               <Work title={'Project Tile goes here'}
                     text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                     tech={'Tech stack : HTML , JavaScript, SASS, React'}
                     src={projectbImg}/>
               <Work title={'Project Tile goes here'}
                     text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                     tech={'Tech stack : HTML , JavaScript, SASS, React'}
                     src={projectcImg}/>
               <Work title={'Project Tile goes here'}
                     text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                     tech={'Tech stack : HTML , JavaScript, SASS, React'}
                     src={projectdImg}/>
               <Work title={'Project Tile goes here'}
                     text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                     tech={'Tech stack : HTML , JavaScript, SASS, React'}
                     src={projecteImg}/>
               <Work title={'Project Tile goes here'}
                     text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                     tech={'Tech stack : HTML , JavaScript, SASS, React'}
                     src={projectfImg}/>
           </FlexWrapper>
       </Container>
       </StyledWorks>

    );
};

const StyledWorks = styled.section `
   min-height: 100vh;
    background-color: darkgoldenrod;
    display: flex;
    flex-direction: column;
    align-items: center;

`