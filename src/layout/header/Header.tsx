import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";





export const Header = () => (
    <StyledHeader>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Container>
            <FlexWrapper direction={"row"} justify={"space-between"} align={"center"}>
                <Logo/>
                <HeaderMenu />
            </FlexWrapper>
        </Container>
    </StyledHeader>
);


const StyledHeader = styled.header `
    padding: 20px 0;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    min-height: 50px;

`
