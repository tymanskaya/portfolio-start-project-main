import styled from "styled-components";
import {type} from "os";
import {Icon} from "../../../../components/icon/Icon";
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
     max-width: 375px;
     width: 100%;
    margin: 20px 0;
     border-radius: 20px;
     overflow: hidden;
    
`

const Image = styled.img `
   width: 100%;
    height: 260px;
    object-fit: cover;

`
const Link = styled.a `
    color: ${theme.colors.fontName};
    text-decoration: 1px;

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
    margin: 20px 0px;

`
const WorkWrapper = styled.div `
   display: flex;
    flex-direction: column;
    margin: 20px 20px;
`