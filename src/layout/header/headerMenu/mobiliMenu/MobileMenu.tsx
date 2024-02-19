import React from "react";
import {Menu} from "../menu/Menu";
import {Contacts} from "../../../../components/contacts/Contacts";
import {S} from "../HeaderMenu_Styles"

export const MobileMenu: React.FC = () => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
              <span></span>
            </S.BurgerButton>
            <S.MobileMenuWrapper isOpen={false}>
                <Menu/>
                <Contacts/>
            </S.MobileMenuWrapper>

        </S.MobileMenu>
    );
};

