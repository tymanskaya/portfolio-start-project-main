import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Contacts} from "../contacts/Contacts";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";



export const Contact = () => (
    <StyledContact>
        <Container>
            <FlexWrapper justify="space-between" align="center">
        {/* eslint-disable-next-line react/jsx-no-undef */}
          <Logo/>
          <ContactMenu>
        <Telephone href="tel:+375333357821">+375333357821</Telephone>
              <Email href="mailto:etymanskaya@bk.ru">etymanskaya@bk.ru</Email>
              <Contacts/>
          </ContactMenu>
            </FlexWrapper>
        </Container>
    </StyledContact>
);

const StyledContact = styled.section `
    border-bottom: 2px solid #42446E;
    max-width: 1248px;
    width: 100%;
    margin: 0 auto;
    padding: 30px 0;
`
const Telephone = styled.a`
    font-family: DM Sans, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.fontSecondary};
    text-align: center;
`
const Email = styled.a`
    font-family: DM Sans, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.fontSecondary};
    text-align: center;
`
const ContactMenu = styled.div`
  display: flex;
    gap: 60px;
`