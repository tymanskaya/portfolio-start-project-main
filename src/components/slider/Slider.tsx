import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>

            </Pagination>

        </StyledSlider>


    );
};

const StyledSlider = styled.div `

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