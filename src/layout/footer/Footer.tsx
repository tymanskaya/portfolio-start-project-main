
import {FlexWrapper} from "../../components/FlexWrapper";
import {MenuFooter} from "./menu/MenuFooter";
import {Container} from "../../components/Container";
import {S} from "./Footer_Styles"

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify="space-between" wrap="wrap">
                    <MenuFooter/>
                    <S.Slogan>Designed and built by <S.Gradient>Rupeka KN</S.Gradient> with <S.Gradient>Love</S.Gradient> & <S.Gradient>Coffee</S.Gradient></S.Slogan>
                </FlexWrapper>
            </Container>
        </S.Footer>

    );
};

