
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Works_Styles"

type LinkCodePropsType = {
  title: string,
    iconId: string
}
export const LinkCode: React.FC<LinkCodePropsType> = (props: LinkCodePropsType) => {
    return (
        <S.LinkCode>
            <Icon iconId={props.iconId}width="20px" height="20px" viewBox="0 0 20 20"/>
            <S.Link href={'#'}>{props.title}</S.Link>
        </S.LinkCode>
    );
};

