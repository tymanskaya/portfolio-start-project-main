
import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/Screenshot_20240126_223819_Gallery.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";




export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'} >
            <MainInfo>
                <SmallText>Hi 👋,</SmallText>
                <SmallText>My name is</SmallText>
                <Name> Rupeka KN</Name>
                <MainTitle>A web developer</MainTitle>
            </MainInfo>
                <PhotoWrapper>
                    <Photo src={photo}/>
                </PhotoWrapper>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section `
    display: flex;
    min-height: 100vh;
    margin: 0 auto;
`
const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    @media (max-width: 877px) {
        align-items: center;
        wrap: nowrap;
        justify-content: center;
    }
`
const MainTitle = styled.h1 `
    ${font ({family: "'Poppins', sans-serif", weight: 700, Fmin: 36, Fmax: 58 })};
    line-height: 70px;
    letter-spacing: -1px;
    white-space: nowrap;
    color: ${theme.colors.fontName};

`
const Name = styled.h2 `
    ${font ({family: "'Poppins', sans-serif", weight: 700, Fmin: 36, Fmax: 58 })};
    //font-family: Poppins, sans-serif;
    //font-size: 58px;
    //font-weight: 700;
    //line-height: 70px;
    letter-spacing: -1px;
    background-color: #2AA5A0;
    background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const SmallText= styled.span `
    display: flex;
    ${font ({family: "'Poppins', sans-serif", weight: 700, Fmin: 36, Fmax: 58 })};
    line-height: 70px;
    letter-spacing: -1px;
    color: ${theme.colors.fontName};
 
    }
`

const PhotoWrapper = styled.div`
       position: relative;
       z-index: 999;
       margin-right: 20px;
    
       &::before {
        content: "";
        width: 369px;
        height: 369px;
        position: absolute;
        border-radius: 50%;
        background-image: linear-gradient(90deg, #E70FAA, #00C0FD);
        top: -9px;
        right: -9px;
        left: -9px;
        bottom: -9px;
        z-index: -1;
        @media ${theme.media.mobile}{
            width: 260px;
            height: 260px;
        }
    }

`
const Photo = styled.img `
    width: 349px;
    height: 349px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 999;
    
    @media ${theme.media.mobile}{
        width: 240px;
        height: 240px;
       
        
        
    }
`
// const SquareWrapper = styled.div`
//     border: 1px solid white;
//     position: absolute;
//     top: 0px;
//     left: 0px;
// `
//
// const Square = styled.div`
//     border-left: 1px solid;
//     border-top: 1px solid;
//     border-bottom: 1px solid;
//     width: 444px;
//     height: 444px;
//     border-image: linear-gradient(to right, rgba(255,255,255,0.1), 60%, rgba(255,255,255,0)) 1;
//     position: absolute;
//     top: -10px;
//     right: -10px;
//     transform: rotate(-165deg);
//     @media ${theme.media.mobile}{
//         width: 335px;
//         height: 335px;
//
//     }
//
//
//
//     &:nth-child(2){
//         transform: rotate(-150deg);
//     }
//     &:nth-child(3){
//         transform: rotate(-135deg);
//     }
//     &:nth-child(4){
//         transform: rotate(-120deg);
//     }
//     &:nth-child(5){
//         transform: rotate(-105deg);
//     }
//
//     `
//
//
