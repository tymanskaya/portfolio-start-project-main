import styled from "styled-components";

import {ContactSocial} from "./contactSocial/ContactSocial";
import React from "react";
import {theme} from "../../styles/Theme";




export const Contacts = () => {
    return (
        <StyledContacts>
            <Link href="https://github.com/tymanskaya"><ContactSocial iconId={"github"} width={"30"} height={"30"}/></Link>
            <Link href="https://www.instagram.com"><ContactSocial iconId={"instag"} width={"30"} height={"30"}/></Link>
            <Link href="https://twitter.com"><ContactSocial iconId={"twitter"} width={"30"} height={"30"}/></Link>
        </StyledContacts>


    );
};

const StyledContacts = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 850px){
        justify-content: center;
    }
 
`
const Link = styled.a `
    transition: ${theme.animations.transition};
    border-radius: 50%;

    &:hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
       background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    
    }
    

`
