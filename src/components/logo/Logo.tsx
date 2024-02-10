import React from "react";
import styled from "styled-components";


export const Logo = () => {
    return (
            <LinkLogo href=''>
                <LogoWrapper>
                    <SmallTextL> 007 </SmallTextL>
                    <SmallTextLN> rupekakn </SmallTextLN>
                </LogoWrapper>
            </LinkLogo>
    );
};

const LinkLogo = styled.a`
    text-align: center;
    padding: 20px 0;
`

const SmallTextL = styled.span`
    font-family: Poppins, sans-serif;
    font-size: 30px;
    font-weight: 700;

    background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &::before {
        content: "{";
    }
    &::after {
        content: "}";
    }
`
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    
`
const SmallTextLN=styled.span `
    font-family: Poppins, sans-serif;
    font-size: 18px;
    font-weight: 700;
    background-color: #2AA5A0;
    background-image: linear-gradient(90deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
`