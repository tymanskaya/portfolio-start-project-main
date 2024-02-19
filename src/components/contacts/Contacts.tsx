import styled from "styled-components";

import {ContactSocial} from "./contactSocial/ContactSocial";
import React from "react";




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
    justify-content: space-between;
    gap: 20px;
    transition: transform .3s ease 0s;
    @media (max-width: 850px){
        justify-content: center;
    }
 
`
const Link = styled.a `

`
