
import {FlexWrapper} from "../../components/FlexWrapper";
import {MenuFooter} from "../../components/menu/MenuFooter";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between" wrap="wrap">
                    <MenuFooter/>
                    <Slogan>Designed and built by <Gradient>Rupeka KN</Gradient> with <Gradient>Love</Gradient> & <Gradient>Coffee</Gradient></Slogan>
                </FlexWrapper>
            </Container>
        </StyledFooter>

    );
};

const StyledFooter = styled.footer `
    padding: 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${FlexWrapper} {
        gap: 20px;
        @media ${theme.media.tablet}{
            align-items: center;
            justify-content: center;
            
        }
        
    }

`
const Slogan = styled.span`
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 17px;
    color: ${theme.colors.fontSecondary};
    letter-spacing: 0px;
    display: block;
    max-width: 459px;
    width: 100%;
    text-align: justify;
    @media ${theme.media.tablet}{
        text-align: center;
    }

`
const Gradient = styled.span`
    
    background-color: #2AA5A0;
    background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`