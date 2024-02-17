import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobiliMenu/MobileMenu";
import {theme} from "../../styles/Theme";
import {Contacts} from "../sections/contacts/Contacts";





export const Header = () => (
    <StyledHeader>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Container>
            <FlexWrapper direction={"row"} justify={"space-between"} align={"center"}>
                <Logo/>
                <HeaderMenu />
                <Contacts/>
                <MobileMenu/>
            </FlexWrapper>
        </Container>
    </StyledHeader>
);


const StyledHeader = styled.header `
    padding: 20px 0;
    position: fixed;
    opacity: 0.8;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    width: 100%;
    
`
