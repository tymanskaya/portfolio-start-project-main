
import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/Screenshot_20240126_223819_Gallery.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";




export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={'center'} justify={'space-between'}>
            <div>
                <SmallText>Hi 👋,</SmallText>
                <SmallText>My name is</SmallText>
                <Name> Rupeka KN</Name>
                <MainTitle>A web developer</MainTitle>
            </div>
                <PhotoWrapper>
            <Photo src={photo}/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>

                </PhotoWrapper>


            </FlexWrapper>
        </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section `
     min-height: 100vh;
    display: flex;


`

const Photo = styled.img `
    width: 349px;
    height: 349px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 999;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 999;
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
        
    }

`
const Square = styled.div`
    border-left: 1px solid;
 
    border-top: 1px solid;
    border-bottom: 1px solid;
    width: 444px;
    height: 444px;
    border-image: linear-gradient(to right, rgba(255,255,255,0.1), 60%, rgba(255,255,255,0)) 1;
    position: absolute;
    top: -20px;
    left: -20px;
    transform: rotate(-165deg);

    
   
    &:nth-child(2){
        transform: rotate(-150deg);
    }
    &:nth-child(3){
        transform: rotate(-135deg);
    }
    &:nth-child(4){
        transform: rotate(-120deg);
    }
    &:nth-child(5){
        transform: rotate(-105deg);
    }
 
    `

const MainTitle = styled.h1 `
    font-family: Poppins, sans-serif;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    color: ${theme.colors.fontName};
`
const Name = styled.h2 `
    font-family: Poppins, sans-serif;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    background-color: #2AA5A0;
    background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    

`

const SmallText= styled.span `
display: flex;
    font-family: Poppins, sans-serif;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
    color: ${theme.colors.fontName};
`
