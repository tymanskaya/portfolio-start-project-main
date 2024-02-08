import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {ContactSocial} from "./contactSocial/ContactSocial";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";


export const Contacts = () => {
    return (
        <StyledContacts>
            <ContactSocial iconId={"github"} width={"30"} height={"30"}></ContactSocial>
            <ContactSocial iconId={"instag"} width={"30"} height={"30"}></ContactSocial>
            <ContactSocial iconId={"twitter"} width={"30"} height={"30"}></ContactSocial>
        </StyledContacts>


    );
};

const StyledContacts = styled.section `

    background-color: darkslateblue;
    display: flex;
    flex-direction: row;
    min-width: 130px;
    width: 100%;
    justify-content: space-between;
 
`