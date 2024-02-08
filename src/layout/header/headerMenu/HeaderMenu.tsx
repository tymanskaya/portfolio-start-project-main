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
                <ListItem><Link href="">Tech Stack</Link></ListItem>
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
    gap: 30px;
    justify-content: space-between;
    ul {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        min-width: 520px;
        width: 100%;
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