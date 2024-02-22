import React from "react";
import {S} from "../Footer_Styles"

export const MenuFooter: React.FC = () => {
    return (
        <S.MenuFooter>
            <ul>
                <li><S.NavLink activeClass="active"
                               to={'main'}
                               smooth={true}
                               spy={true} >Home</S.NavLink></li>
                <li><S.NavLink activeClass="active"
                               to={'skills'}
                               smooth={true}
                               spy={true}>Technologies</S.NavLink></li>
                <li><S.NavLink activeClass="active"
                               to={'projects'}
                               smooth={true}
                               spy={true}>Projects</S.NavLink></li>
                <li><S.NavLink activeClass="active"
                               to={'testimony'}
                               smooth={true}
                               spy={true}>Testimony</S.NavLink></li>
                <li><S.NavLink activeClass="active"
                               to={'contact'}
                               smooth={true}
                               spy={true}>Contact</S.NavLink></li>
            </ul>
        </S.MenuFooter>
    );
};

