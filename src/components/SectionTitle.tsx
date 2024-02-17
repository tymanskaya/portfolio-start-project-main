import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2 `
    ${font ({family: "'Poppins', sans-serif", weight: 700, Fmin: 28, Fmax: 48 })};

    color: ${theme.colors.fontMain};
    text-align: center;

    @media ${theme.media.mobile} {
        margin-top: 20px;
        margin-bottom: 40px;
    }
    
    
`