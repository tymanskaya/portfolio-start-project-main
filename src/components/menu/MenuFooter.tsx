import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const MenuFooter = () => {
    return (
        <StyledMenuFooter>
        <ul>
            <li><Link href="">Home</Link></li>
            <li><Link href="">About</Link></li>
            <li><Link href="">Tech Stack</Link></li>
            <li><Link href="">Projects</Link></li>
            <li><Link href="">Contact</Link></li>
        </ul>
    </StyledMenuFooter>
    );
};

const StyledMenuFooter = styled.nav `
    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: center;
 
        
    }
`
const Link = styled.a`
    font-family: DM Sans, sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.fontSecondary};
`