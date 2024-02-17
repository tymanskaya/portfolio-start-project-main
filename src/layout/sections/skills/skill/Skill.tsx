
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    width: string
    height: string


}
export const Skill = (props: SkillPropsType) => {
    return (

                <SkillStyled>
                    <Icon iconId={props.iconId} width={props.width} height={props.height} />
                </SkillStyled>

    );
};

    const SkillStyled = styled.div `
       width: 180px;
       text-align: center;
       padding: 20px 0;
    `
