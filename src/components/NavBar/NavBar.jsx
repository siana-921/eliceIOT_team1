import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import img from "../../../public/images/logo.png";

const NavBar = () => {
  return (
    <NavigationBar>
      <LogoLink href="/">
        <Image src={img} width={150} alt="logo" />
      </LogoLink>
      <Links>
        <Link href="/dashboard">Dashboard</Link>
        <Space>|</Space>
        <Link href="/controller">Controller</Link>
        <Space>|</Space>
        <Link href="/">Profile</Link>
      </Links>
    </NavigationBar>
  );
};

const NavigationBar = styled.nav`
  width: 100%;
  height: 50px;
  background-color: transparent;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const LogoLink = styled.a`
  width: 150px;
  position: absolute;
  top: 50%;
  left: 0;
  padding-left: 1em;
  transform: translateY(-50%);
`;
const Links = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  padding-right: 22px;
  transform: translateY(-50%);
`;

const Space = styled.span`
  padding: 0 10px 0 10px;
`;

export default NavBar;
