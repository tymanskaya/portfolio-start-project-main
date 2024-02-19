import {font} from "../../styles/Common";
import styled from "styled-components";

const LinkLogo = styled.a`
    text-align: center;
    padding: 20px 0;

`

const SmallTextL = styled.span`
    ${font ({family: "'Poppins', sans-serif", weight: 700, Fmin: 26, Fmax: 32 })};

    background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 999999999999;

    &::before {
        content: "{";
    }
    &::after {
        content: "}";
    }
`
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    flex-wrap: nowrap;
   
`
const SmallTextLN=styled.span `
    ${font ({family: "'Poppins', sans-serif", weight: 700, Fmin: 14, Fmax: 17 })};
    background-color: #2AA5A0;
    background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 999999999999;
`

export const S = {
    LinkLogo,
    SmallTextL,
    LogoWrapper,
    SmallTextLN
}