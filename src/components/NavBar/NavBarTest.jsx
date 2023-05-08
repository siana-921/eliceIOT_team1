import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import img from "../../../public/images/logo.png";
import Link from "next/link";
// import import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

export default function NavBarTest() {
  const [menuToggle, setMenuToggle] = useState(false);
  const { data: session, status } = useSession();

  if (status === "authenticated") console.log("session", session);

  return (
    <NavigationBar>
      <LogoLinkA href="/">
        <Image src={img} width={300} alt="logo" />
      </LogoLinkA>
      {/* <LinkDiv>
        <LinkStyled href="/dashboard">Dashboard</LinkStyled>
        <LinkStyledSpan>|</LinkStyledSpan>
        <LinkStyled href="/controller">Controller</LinkStyled>
        <LinkStyledSpan>|</LinkStyledSpan>
        <LinkStyled href="/">Profile</LinkStyled>
        <LinkStyledSpan>|</LinkStyledSpan>
      </LinkDiv> */}
      {status === "authenticated" ? (
        <LinkDiv>
          <LinkStyled href="#" onClick={() => signOut()}>
            Log out
          </LinkStyled>
        </LinkDiv>
      ) : (
        <LinkDiv>
          <LinkStyled href="/api/auth/signin">Login</LinkStyled>
          <LinkStyledSpan>|</LinkStyledSpan>
          <LinkStyled href="/signup">Signup</LinkStyled>
        </LinkDiv>
      )}
      ;
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
  left: 68%;
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
