import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {LinkCode} from "../linkCode/LinkCode";



type WorkPropsType = {
   title: string
    text: string
    src: string
    tech: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
          <Image src={props.src}/>
            <WorkWrapper>
          <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TechStack>{props.tech}</TechStack>
                <FlexWrapper justify={'space-between'}>
                 <LinkCode title={"Live Preview"} iconId={'chain'}/>
                 <LinkCode title={"View Code"} iconId={'ggg'}/>
                </FlexWrapper>
                </WorkWrapper>
        </StyledWork>

    );
};

const StyledWork = styled.div `
     background-color: ${theme.colors.primaryWork};
     
     width: 330px;
    flex-grow: 1;
  
     border-radius: 20px;
     overflow: hidden;
    @media ${theme.media.desktop}{
        max-width: 375px;
    }
    
`

const Image = styled.img `
   width: 100%;
    height: 260px;
    object-fit: cover;

`

const Title = styled.h3 `
     font-family: Poppins, sans-serif;
     font-weight: 500;
    font-size: 28px;
    color: ${theme.colors.fontMain};

`
const Text = styled.p `
    font-family: Poppins, sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: ${theme.colors.fontMain};
    margin-top: 20px;

`

const TechStack = styled.p `
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.fontMain};
    margin: 20px 0;

`
const WorkWrapper = styled.div `
   display: flex;
    flex-direction: column;
    margin: 20px 20px;
`