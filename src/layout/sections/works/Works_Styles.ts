import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Works = styled.section `
    position: relative;
    ${FlexWrapper} {
        gap: 30px;
    }
    `
const Work = styled.div `
     background-color: ${theme.colors.primaryWork};
     width: 330px;
    flex-grow: 1;
     border-radius: 20px;
     overflow: hidden;

    @media ${theme.media.desktop}{
        max-width: 375px;
    }
    
`

const Image = styled.img `
   width: 100%;
    height: 260px;
    object-fit: cover;
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: rgba(16, 16, 16, 0.5);
        border-radius: 19px 19px 0 0;
    }
    &:hover:after {
        background-color: transparent;
    }

`

const Title = styled.h3 `
     font-family: Poppins, sans-serif;
     font-weight: 500;
    font-size: 28px;
    color: ${theme.colors.fontMain};

`
const Text = styled.p `
    font-family: Poppins, sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.fontMain};
    margin-top: 20px;

`

const TechStack = styled.p `
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.fontMain};
    margin: 20px 0;

`
const WorkWrapper = styled.div `
   display: flex;
    flex-direction: column;
    margin: 20px 20px;
`

const LinkCode = styled.div`
   display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

`
const Link = styled.a`
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.fontName};
    transition: ${theme.animations.transition};
    
    &:hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        color: #fff;
        text-decoration: underline;
    }

`

export const S= {
    Works,
    Work,
    Image,
    Title,
    Text,
    TechStack,
    WorkWrapper,
    LinkCode,
    Link


}
