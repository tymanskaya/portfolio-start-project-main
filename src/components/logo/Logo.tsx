import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

type LogoPropsType = {
    iconId: string,
    width: string,
    height: string
}
export const Logo = (props : LogoPropsType) => {
    return (
            <LinkLogo href=''>
                <Icon iconId={props.iconId} width={props.width} height={props.height} />
            </LinkLogo>
    );
};

const LinkLogo = styled.a`
    text-align: center;
    padding: 20px 0;
`