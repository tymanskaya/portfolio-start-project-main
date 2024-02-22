
import React from "react";
import photo from '../../../assets/images/Screenshot_20240126_223819_Gallery.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles";
import Typewriter from 'typewriter-effect';




export const Main: React.FC = () => {
    return (
        <S.Main id={'main'}>
            <Container>
            <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap-reverse'} >
            <S.MainInfo>
                <S.SmallText>Hi 👋,</S.SmallText>
                <S.SmallText>My name is</S.SmallText>
                <S.Name> Rupeka KN</S.Name>
                {/*<S.MainTitle>A web developer</S.MainTitle>*/}
                <S.MainTitle>
                    <p>A web developer</p>
                <Typewriter
                    options={{
                        strings: ['A web developer'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                    }}
                />
                </S.MainTitle>
            </S.MainInfo>
                <S.PhotoWrapper>
                    <S.Photo src={photo} alt="Photo"/>
                </S.PhotoWrapper>
            </FlexWrapper>
            </Container>
        </S.Main>
    );
};

