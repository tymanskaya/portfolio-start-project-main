import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Main = styled.section `
    display: flex;
    min-height: 100vh;
    margin: 0 auto;
    @media ${theme.media.mobile} {
        ${FlexWrapper} {
            align-items: flex-start;
        }
    }
`
const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-width: 550px;
    width: 100%;
    @media (max-width: 877px) {
        align-items: center;
        wrap: nowrap;
        justify-content: center;
    }
`
const MainTitle = styled.h1 `
    ${font ({family: "'Poppins', sans-serif", weight: 700, Fmin: 36, Fmax: 58 })};
    line-height: 70px;
    letter-spacing: -1px;
    white-space: nowrap;
    color: ${theme.colors.fontName};
    p {
        display: none;
    }
  
    }


`
const Name = styled.h2 `
    ${font ({family: "'Poppins', sans-serif", weight: 700, Fmin: 36, Fmax: 58 })};

    letter-spacing: -1px;
    background-color: #2AA5A0;
    background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const SmallText= styled.span `
    display: flex;
    ${font ({family: "'Poppins', sans-serif", weight: 700, Fmin: 36, Fmax: 58 })};
    line-height: 70px;
    letter-spacing: -1px;
    color: ${theme.colors.fontName};

`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 999;
    margin-right: 20px;

    &::before {
        content: "";
        width: 369px;
        height: 369px;
        position: absolute;
        border-radius: 50%;
        animation: pulse 2s infinite;
        background-image: linear-gradient(90deg, #E70FAA, #00C0FD);
        box-shadow: 16px 16px 24px #0a0a0a, -16px -16px 24px #282828;
        top: -9px;
        right: -9px;
        left: -9px;
        bottom: -9px;
        z-index: -1;
        @keyframes pulse {
            0% {
                -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
                box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
            }
            70% {
                -webkit-box-shadow: 0 0 0 15px rgba(204, 169, 44, 0);
                box-shadow: 0 0 0 20px rgba(204, 169, 44, 0);
            }
            100% {
                -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
                box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
            }
        }
        @media ${theme.media.mobile}{
            width: 260px;
            height: 260px;
            animation: none;
        }
    }

`
const Photo = styled.img `
    width: 349px;
    height: 349px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 999;

    @media ${theme.media.mobile}{
        width: 240px;
        height: 240px;



    }
`
export const S = {
    Main,
    MainInfo,
    MainTitle,
    Name,
    SmallText,
    PhotoWrapper,
    Photo
}