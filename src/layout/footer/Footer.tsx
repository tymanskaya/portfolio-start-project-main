
import {FlexWrapper} from "../../components/FlexWrapper";
import {MenuFooter} from "../../components/menu/MenuFooter";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between">
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
    
    
`
const Slogan = styled.span`
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.fontSecondary};
    align-items: center;

`
const Gradient = styled.span`
    
    background-color: #2AA5A0;
    background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`