import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Skill = styled.div `
        flex-grow: 1;
       width: 180px;
       text-align: center;
       padding: 20px 0;
        @media ${theme.media.mobile}{
            flex: 0 0 30%;
            margin: 0 10px 0;
            min-height: 200px;
        }
    `

const Skills = styled.section `

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
    
    @media ${theme.media.mobile} {
        padding: 80px 0;
        ${FlexWrapper} {
            align-items: flex-start;
            -webkit-column-gap: 0;
            column-gap: 0;
            flex-wrap: nowrap;
            justify-content: flex-start;
            overflow: auto;
        }
    }

`
export const S={
    Skill,
    Skills
}