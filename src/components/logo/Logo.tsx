import React from "react";
import {S} from "./Logo_Styles"


export const Logo: React.FC = () => {
    return (
            <S.LinkLogo href=''>
                <S.LogoWrapper>
                    <S.SmallTextL>007</S.SmallTextL>
                    <S.SmallTextLN> rupekakn </S.SmallTextLN>
                </S.LogoWrapper>
            </S.LinkLogo>
    );
};

