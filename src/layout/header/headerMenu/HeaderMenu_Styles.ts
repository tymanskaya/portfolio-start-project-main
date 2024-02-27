import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";

//Menu

const Nav = styled.ul`
    display: flex;
    align-items: center;
    -webkit-column-gap: 45px;
    column-gap: 45px;
    flex-wrap: nowrap;
    row-gap: 20px;
`
const ListItem = styled.li`
    justify-content: space-between;
    list-style: none;
    transition: ${theme.animations.transition};

    &:hover {
        transition: ${theme.animations.transition};
        transform: scale(1.1);
        color: #ffffff;
    }




`
const NavLink = styled(Link)`
    font-family: DM Sans, sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${theme.colors.fontSecondary};
    cursor: pointer;
    transition: ${theme.animations.transition};

    &:hover, &.active {
        transition: ${theme.animations.transition};
        transform: scale(1.1);
        color: #ffffff;
    }
    
    

    @media (max-width: 850px) {
        font-size: 28px;
    }
`

//MobileMenu

const MobileMenu = styled.nav `
    
`
const MobileMenuWrapper = styled.div<{isOpen:boolean}>`
    position: fixed;
    background-color: rgba(54, 54, 54);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    transform: translateY(-100%);
    transition: 1s ease-in-out;
    
    
    ul {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transition: 1s ease-in-out;

    }
    ${props => props.isOpen && css<{isOpen:boolean}> `
        transform: translateY(0);
      & ul {
          gap: 50px;
      }
        
    `}
`
const BurgerButton = styled.button<{isOpen:boolean}>`
        position: fixed;
    width: 200px;
    height: 200px;
    top: -80px;
    right: -80px;
    cursor: pointer;
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

//DesktopMenu

const DesktopMenu = styled.nav `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`


export const S = {
    Nav,
    ListItem,
    NavLink,
    BurgerButton,
    MobileMenuWrapper,
    MobileMenu,
    DesktopMenu


}