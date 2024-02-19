import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Slider = styled.div `

    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div `
        
    text-align: center;
    

`

const Text = styled.p `
    margin: 50px 0 20px;
    font-family: Poppins, sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.fontMain};
    @media ${theme.media.mobile}{
        margin: 0 0 20px;
    }

`

const Name = styled.span `
    font-family: Poppins, sans-serif;
    font-weight: 300;
    font-size: 25px;
    color: ${theme.colors.fontMain};
    letter-spacing: 1px;
    margin-bottom: 30px;
    display: inline-block;

`

const Pagination = styled.div `
     span {
         display: inline-block;
         width: 7px;
         height: 7px;
        
         background-color: ${theme.colors.fontName};
         border-radius: 50%;
         
         & + span {
             margin-left: 5px;
         }
         &.active {
             background-color: ${theme.colors.primaryWork};
             width: 20px;
         }
     }

`
export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}
