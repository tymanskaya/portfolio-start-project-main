import React from "react";
import {S} from "../Footer_Styles"

export const MenuFooter: React.FC = () => {
    return (
        <S.MenuFooter>
        <ul>
            <li><S.Link href="">Home</S.Link></li>
            <li><S.Link href="">About</S.Link></li>
            <li><S.Link href="">Technologies</S.Link></li>
            <li><S.Link href="">Projects</S.Link></li>
            <li><S.Link href="">Contact</S.Link></li>
        </ul>
    </S.MenuFooter>
    );
};

