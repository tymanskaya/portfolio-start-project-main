import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Testimony: React.FC = () => {
    return (
           <StyledTestimony id={'testimony'}>
               <Container>
               <SectionTitle>Testimony</SectionTitle>
               <FlexWrapper direction={'column'} align={'center'}>
                   <Slider/>
               </FlexWrapper>
               </Container>
           </StyledTestimony>


    );
};

const StyledTestimony = styled.section `
 
`
