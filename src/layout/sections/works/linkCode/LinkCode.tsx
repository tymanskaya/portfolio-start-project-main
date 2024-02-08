import {Container} from "../../../../components/Container";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Title} from "../../../../components/Title";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Skill} from "../../skills/skill/Skill";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type LinkCodePropsType = {
  title: string,
    iconId: string
}
export const LinkCode = (props: LinkCodePropsType) => {
    return (
        <StyledLinkCode>
            <Icon iconId={props.iconId}width="20px" height="20px" viewBox="0 0 20 20"/>
            <Link href={'#'}>{props.title}</Link>
        </StyledLinkCode>
    );
};

const StyledLinkCode = styled.div`
   display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`
const Link = styled.a`
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.fontName};
    text-decoration: underline;

`