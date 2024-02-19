import {Icon} from "../../icon/Icon";
import styled from "styled-components";

type ContactSocialPropsType = {

    iconId: string
    width: string
    height: string

}
export const ContactSocial = (props: ContactSocialPropsType) => {
    return (
        <StyledContactSocial>
            <Icon iconId={props.iconId} width={props.width} height={props.height} />
       </StyledContactSocial>

    );
};

const StyledContactSocial = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

