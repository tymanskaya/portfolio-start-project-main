
import React from "react";
import photo from '../../../assets/images/Screenshot_20240126_223819_Gallery.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"




export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'} >
            <S.MainInfo>
                <S.SmallText>Hi 👋,</S.SmallText>
                <S.SmallText>My name is</S.SmallText>
                <S.Name> Rupeka KN</S.Name>
                <S.MainTitle>A web developer</S.MainTitle>
            </S.MainInfo>
                <S.PhotoWrapper>
                    <S.Photo src={photo}/>
                </S.PhotoWrapper>
            </FlexWrapper>
            </Container>
        </S.Main>
    );
};

