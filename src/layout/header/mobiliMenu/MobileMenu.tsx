import React from "react";
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
              <span></span>
            </BurgerButton>
            <MobileMenuWrapper isOpen={false}>
            <ul>
                <ListItem><Link href="">Home</Link></ListItem>
                <ListItem><Link href="">About</Link></ListItem>
                <ListItem><Link href="">Technologies</Link></ListItem>
                <ListItem><Link href="">Projects</Link></ListItem>
                <ListItem><Link href="">Contact</Link></ListItem>
            </ul>
            </MobileMenuWrapper>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav `
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`
const MobileMenuWrapper = styled.div<{isOpen:boolean}>`
    position: fixed;
    background-color: rgba(54, 54, 54, 0.9);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    display: none;
    
    ${props => props.isOpen && css<{isOpen:boolean}> `
      display: flex;
        justify-content: center;
        align-items: center;
        
    `}
    ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 40px;

    }
`
const BurgerButton = styled.button<{isOpen:boolean}>`
        position: fixed;
    width: 200px;
    height: 200px;
    top: -80px;
    right: -80px;
    z-index: 99999999;
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.fontMain};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen:boolean}> `
            background-color: rgba(255, 255, 255, 0);
        
    `}
        
        &::before{
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.fontMain};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{isOpen:boolean}> `
      transform: rotate(-45deg) translateY(0px);
        
    `}
            
        }

        &::after{
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.fontMain};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen:boolean}> `
      transform: rotate(45deg) translateY(0px);
                width: 36px;
        
    `}
        }
    }
`
const ListItem = styled.li`
        
`
const Link = styled.a`
        font-family: DM Sans, sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${theme.colors.fontSecondary};
`