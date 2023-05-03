import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import img from "../../../public/images/logo.png";
import Link from "next/link";

export default function NavBarTest() {
  return (
    <NavigationBar>
      <LogoLinkA href="/">
        <Image src={img} width={300} alt="logo" />
      </LogoLinkA>
      <LinkDiv>
        <LinkStyled href="/dashboard">Dashboard</LinkStyled>
        <LinkStyledSpan>|</LinkStyledSpan>
        <LinkStyled href="/controller">Controller</LinkStyled>
        <LinkStyledSpan>|</LinkStyledSpan>
        <LinkStyled href="/">Profile</LinkStyled>
      </LinkDiv>
    </NavigationBar>
  );
}

const NavigationBar = styled.nav`
  display: flex;
  cursor: pointer;
`;

const LogoLinkA = styled.a`
  width: 10rem;
  height: 10rem;
  position: absolute;
  margin-top: 1rem;
  margin-left: 2rem;
`;

const LinkDiv = styled.div`
  left: 75%;
  position: absolute;
  margin-top: 2.5rem;
  font-size: 1.3rem;
`;

const LinkStyled = styled.a`
  position: relative;
  display: inline-block;
  transition: 0.5s;
  color: #97c410;
  margin-left: 1rem;
  margin-right: 1rem;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    transition: transform 0.5s ease-out;
    transform: scaleX(0);
    transform-origin: bottom right;
    background-color: #ffdd00;
  }

  &:hover {
    color: #95a5a6;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const LinkStyledSpan = styled.span``;
