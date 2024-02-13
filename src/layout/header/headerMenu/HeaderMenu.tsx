import React from "react";
import styled from "styled-components";
import {Contacts} from "../../sections/contacts/Contacts";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ul>
                <ListItem><Link href="">Home</Link></ListItem>
                <ListItem><Link href="">About</Link></ListItem>
                <ListItem><Link href="">Technologies</Link></ListItem>
                <ListItem><Link href="">Projects</Link></ListItem>
                <ListItem><Link href="">Contact</Link></ListItem>
            </ul>
            <Contacts/>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    justify-content: space-between;
    ul {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        max-width: 609px;
        width: 100%;
        gap: 40px;
        @media ${theme.media.tablet} {
            display: none;
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