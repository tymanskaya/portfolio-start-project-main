import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
           <StyledTestimony>
               <SectionTitle>Testimony</SectionTitle>
               <FlexWrapper direction={'column'} align={'center'}>
                   <Slider/>
               </FlexWrapper>

           </StyledTestimony>


    );
};

const StyledTestimony = styled.section `
    padding: 100px 0;
`
