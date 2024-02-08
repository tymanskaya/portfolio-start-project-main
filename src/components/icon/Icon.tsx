import React from "react";
import styled from "styled-components";
import iconsSprite from "../../assets/images/icons-sprite.svg"
import { type } from "os";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string

}

export const Icon = (props : IconPropsType) => {
    return (
        <svg width={props.width || "88"} height={props.height || "87"} viewBox={props.width || "0 0 88 87"}   fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId} `}/>
        </svg>
    );
};