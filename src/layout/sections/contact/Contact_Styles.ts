import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Contact = styled.section `
    padding-bottom: 30px;
    ${FlexWrapper} {
        border-bottom: 2px solid #42446E;
    }
    
    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
    }
    `


const ContactMenu = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 556px;
    width: 100%;
    @media ${theme.media.tablet}{
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding-bottom: 30px;
    }
    `
const Telephone = styled.a`
    font-family: DM Sans, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.fontSecondary};
    text-align: center;
`
const Email = styled.a`
    font-family: DM Sans, sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.fontSecondary};
    text-align: center;
`
export const S = {
    Contact,
    ContactMenu,
    Telephone,
    Email
}
