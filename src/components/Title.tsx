import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const Title = styled.h3 `
    ${font ({family: "'Poppins', sans-serif", weight: 400, Fmin: 26, Fmax: 32 })};
    color: ${theme.colors.fontSecondary};
    text-align: center;
    margin-bottom: 100px;
    margin-top: 30px;
    
    @media ${theme.media.mobile} {
        margin-top: 20px;
        margin-bottom: 60px;
    }
`