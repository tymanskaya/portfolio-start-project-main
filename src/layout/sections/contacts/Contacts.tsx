import styled from "styled-components";

import {ContactSocial} from "./contactSocial/ContactSocial";
import React from "react";
import {theme} from "../../../styles/Theme";



export const Contacts = () => {
    return (
        <StyledContacts>
            <Link href=""><ContactSocial iconId={"github"} width={"30"} height={"30"}/></Link>
            <Link href=""><ContactSocial iconId={"instag"} width={"30"} height={"30"}/></Link>
            <Link href=""><ContactSocial iconId={"twitter"} width={"30"} height={"30"}/></Link>
        </StyledContacts>


    );
};

const StyledContacts = styled.div `
    display: flex;
    flex-direction: row;
    max-width: 130px;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    @media ${theme.media.tablet} {
        gap: 40px;
    }
 
`
const Link = styled.a `

`
