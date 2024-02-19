
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {Title} from "../../../components/Title";
import {S} from "./Skill_Style"



const skillData = [
    {
        iconId: "css"
    },
    {
        iconId: "react"
    },
    {
        iconId: "vscode"

    },
    {
        iconId: "js"

    },
    {
        iconId: "html"

    },
    {
        iconId: "git"

    },
    {
        iconId: "phone"

    },
    {
        iconId: "bootstrap"

    },
    {
        iconId: "tailwind"

    },
    {
        iconId: "sass"

    },
    {
        iconId: "icongit"
    },
    {
        iconId: "greensock"
    }

]
export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
            <SectionTitle>My Tech Stack</SectionTitle>
            <Title>Technologies I’ve been working with recently</Title>
              <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'center'}>
                  {skillData.map((s, index) => {
                      return <Skill iconId={s.iconId} key={index}/>
                  })}
              </FlexWrapper>
            </Container>
        </S.Skills>
    );
};



