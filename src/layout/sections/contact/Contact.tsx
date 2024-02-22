
import {Logo} from "../../../components/logo/Logo";
import {Contacts} from "../../../components/contacts/Contacts";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Contact_Styles"



export const Contact: React.FC = () => (
    <S.Contact id={"contact"}>
        <Container>
            <FlexWrapper justify="space-between" align="center" wrap="wrap">
                    <Logo/>
          <S.ContactMenu>
          <S.Telephone href="tel:+375333357821">+375333357821</S.Telephone>
          <S.Email href="mailto:etymanskaya@bk.ru">etymanskaya@bk.ru</S.Email>
           <Contacts/>
          </S.ContactMenu>
            </FlexWrapper>
        </Container>
    </S.Contact>
);

