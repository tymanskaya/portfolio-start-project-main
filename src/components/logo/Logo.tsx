import React from "react";
import {S} from "./Logo_Styles";
import {animateScroll as scroll} from "react-scroll";


export const Logo: React.FC = () => {
    return (
            <S.LinkLogo onClick={()=>{scroll.scrollToTop()}}>
                <S.LogoWrapper>
                    <S.SmallTextL>007</S.SmallTextL>
                    <S.SmallTextLN> rupekakn </S.SmallTextLN>
                </S.LogoWrapper>
            </S.LinkLogo>
    );
};

