import React from "react";
import {S} from "../HeaderMenu_Styles"

export const Menu: React.FC= () => {
    return (
        <S.Nav>
            <S.ListItem><S.NavLink activeClass="active"
                                   to={'main'}
                                   smooth={true}
                                   spy={true} >Home</S.NavLink></S.ListItem>
            <S.ListItem><S.NavLink activeClass="active"
                                   to={'skills'}
                                   smooth={true}
                                   spy={true}
                                   offset={-20}>Technologies</S.NavLink></S.ListItem>
            <S.ListItem><S.NavLink activeClass="active"
                                   to={'projects'}
                                   smooth={true}
                                   spy={true}>Projects</S.NavLink></S.ListItem>
            <S.ListItem><S.NavLink activeClass="active"
                                   to={'testimony'}
                                   smooth={true}
                                   spy={true}>Testimony</S.NavLink></S.ListItem>
            <S.ListItem><S.NavLink activeClass="active"
                                   to={'contact'}
                                   smooth={true}
                                   spy={true}>Contact</S.NavLink></S.ListItem>
        </S.Nav>
    )
}
