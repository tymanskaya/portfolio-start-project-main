import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

const Header= styled.header`
    padding: 20px 0 0 ;
    position: fixed;
    opacity: 0.9;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    width: 100%;
    ${FlexWrapper}{
        gap: 20px;
    }
    @media (max-width: 850px){
        //opacity: 1;
    }
`
const MenuWrappers = styled.div`
    display: flex;
    gap: 20px;
    

`
export const S ={
    Header,
    MenuWrappers
}