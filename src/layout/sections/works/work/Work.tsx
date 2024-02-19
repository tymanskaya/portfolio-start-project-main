
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {LinkCode} from "../linkCode/LinkCode";
import {S} from "../Works_Styles"



type WorkPropsType = {
   title: string
    text: string
    src: string
    tech: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
          <S.Image src={props.src}/>
            <S.WorkWrapper>
          <S.Title>{props.title}</S.Title>
            <S.Text>{props.text}</S.Text>
            <S.TechStack>{props.tech}</S.TechStack>
                <FlexWrapper justify={'space-between'}>
                 <LinkCode title={"Live Preview"} iconId={'chain'}/>
                 <LinkCode title={"View Code"} iconId={'ggg'}/>
                </FlexWrapper>
                </S.WorkWrapper>
        </S.Work>

    );
};

