import React from "react";
import {Menu} from "../menu/Menu";
import {Contacts} from "../../../../components/contacts/Contacts";
import {S} from "../HeaderMenu_Styles"

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu/>
            <Contacts/>
        </S.DesktopMenu>
    );
};
