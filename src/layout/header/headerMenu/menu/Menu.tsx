import React from "react";
import {S} from "../HeaderMenu_Styles"

export const Menu: React.FC= () => {
    return (
        <S.Nav>
            <S.ListItem><S.Link href="">Home</S.Link></S.ListItem>
            <S.ListItem><S.Link href="">About</S.Link></S.ListItem>
            <S.ListItem><S.Link href="">Technologies</S.Link></S.ListItem>
            <S.ListItem><S.Link href="">Projects</S.Link></S.ListItem>
            <S.ListItem><S.Link href="">Contact</S.Link></S.ListItem>
        </S.Nav>
    )
}
