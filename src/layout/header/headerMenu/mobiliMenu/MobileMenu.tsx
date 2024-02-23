import React, {useState} from "react";
import {Menu} from "../menu/Menu";
import {Contacts} from "../../../../components/contacts/Contacts";
import {S} from "../HeaderMenu_Styles"

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen]= useState(false);
    const onBurgerBtnClick = () =>  {setmenuIsOpen(!menuIsOpen)}
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuWrapper isOpen={menuIsOpen} onClick={() => {setmenuIsOpen(false)}}>
                <Menu/>
                <Contacts/>
            </S.MobileMenuWrapper>

        </S.MobileMenu>
    );
};