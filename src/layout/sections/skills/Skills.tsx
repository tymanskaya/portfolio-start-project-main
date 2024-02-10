import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {Title} from "../../../components/Title";



export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <SectionTitle>My Tech Stack</SectionTitle>
            <Title>Technologies I’ve been working with recently</Title>
              <FlexWrapper wrap={'wrap'} justify={'space-between'} direction={'row'} align={'center'}>
                  <Skill iconId={"css"} width={'120'} height={'120'} />
                  <Skill iconId={'git'} width={'120'} height={'120'} />
                  <Skill iconId={'react'} width={'120'} height={'120'} />
                  <Skill iconId={'vscode'} width={'120'} height={'120'} />
                  <Skill iconId={'js'} width={'120'} height={'120'} />
                  <Skill iconId={'html'} width={'120'} height={'120'} />
                  <Skill iconId={'greensock'} width={'120'} height={'120'} />
                  <Skill iconId={'icongit'} width={'120'} height={'120'} />
                  <Skill iconId={'sass'} width={'120'} height={'120'} />
                  <Skill iconId={'tailwind'} width={'120'} height={'120'} />
                  <Skill iconId={'bootstrap'} width={'120'} height={'120'} />
                  <Skill iconId={'phone'} width={'120'} height={'120'} />
              </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section `

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;

`

