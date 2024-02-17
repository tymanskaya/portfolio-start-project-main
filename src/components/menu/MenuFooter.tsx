import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const MenuFooter = () => {
    return (
        <StyledMenuFooter>
        <ul>
            <li><Link href="">Home</Link></li>
            <li><Link href="">About</Link></li>
            <li><Link href="">Technologies</Link></li>
            <li><Link href="">Projects</Link></li>
            <li><Link href="">Contact</Link></li>
        </ul>
    </StyledMenuFooter>
    );
};

const StyledMenuFooter = styled.nav `
    max-width: 582px;
    width: 100%;
    
    ul {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
        max-width: 582px;
        width: 100%;
        @media ${theme.media.mobile}{
            justify-content: center;
            gap: 10px;
        }
     
        
    }
`
const Link = styled.a`
    font-family: DM Sans, sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.fontSecondary};
`