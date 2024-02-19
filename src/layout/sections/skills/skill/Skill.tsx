
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Skill_Style"

type SkillPropsType = {
    iconId: string
}
export const Skill: React.FC <SkillPropsType> = (props: SkillPropsType) => {
    return (

                <S.Skill>
                    <Icon iconId={props.iconId} width={'120'} height={'120'}/>
                </S.Skill>

    );
};


