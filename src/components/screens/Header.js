import React from 'react'
import styled from "styled-components"

function Header() {
    return (
        <>
        <Head>
            <Left>
                <ImageContainer>
                    <Logo src={require("../assets/images/logo.svg").default} alt="Logo" />
                </ImageContainer>
            </Left>
            <Right>
                <LoginButton>Login</LoginButton>
            </Right>
        </Head>
        </>
    )
}
const Head = styled.div`
    padding: 50px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 50%;
`;
const Right = styled.div`
    width: 50%;
    text-align: right;
`;
const Logo = styled.img`
    width: 100%;
    display: block;
`;
const ImageContainer = styled.div`
    width: 30%;
`;
const LoginButton = styled.button`
    padding: 10px 35px;
    color: #fff;
    background: blue;
    font-size: 20px;
    display: inline-block;
    outline: none;
    border: none;
    border-radius: 6px;  
    cursor: pointer;  
`;

export default Header
