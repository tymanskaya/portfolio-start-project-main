import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobiliMenu/MobileMenu";
import {S} from "./Header_Styles"





export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 850;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Container>
                <FlexWrapper direction={"row"} justify={"space-between"} align={"center"}>
                    <Logo/>
                    <S.MenuWrappers>
                        {width < breakpoint? <MobileMenu/>
                            : <DesktopMenu/>}
                    </S.MenuWrappers>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
}

