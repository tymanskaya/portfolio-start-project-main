import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../header/headerMenu/menu/Menu";
import {Link} from "react-scroll";

const Footer = styled.footer `
    padding-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    ${FlexWrapper} {
        gap: 20px;
        @media (max-width: 1091px){
            align-items: center;
            justify-content: center;
        }
    }
    

`
const MenuFooter = styled.nav `
    max-width: 582px;
    width: 100%;
    
    ul {
        display: flex;
        //flex-wrap: wrap;
        //flex-grow: 1;
        justify-content: space-between;
        align-items: center;
        max-width: 582px;
        width: 100%;
        @media ${theme.media.mobile}{
            justify-content: center;
            gap: 10px;
            flex-direction: column;
        }
        li {
            transition: ${theme.animations.transition};
            &:hover {
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
                color: white;
            }
        }
     
        
    }
`
const NavLink = styled(Link)`
    font-family: DM Sans, sans-serif;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    color: ${theme.colors.fontSecondary};
    transition: ${theme.animations.transition};
    &:hover, &.active{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        color: white;
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
export const S ={
    Footer,
    MenuFooter,
    NavLink,
    Slogan,
    Gradient

}