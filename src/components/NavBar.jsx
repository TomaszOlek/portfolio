import React from "react";
import styled from 'styled-components';

const NavigationContainer = styled.div`
  height: 10vh;
  width: calc(100vw - 2 * 10.55vmin);
  max-width: 100vw;
  padding: 0 10.55vmin;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  background: none;
  color: #fff;
  z-index: 10;
`
const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 4.21vmin;
`
const Logo = styled.p`
  cursor: pointer;
  font-family: 'Rye', cursive;
  font-size: 4.22vmin;
  font-weight: 400;

  align-self: center;
  margin: 1px;

  &:hover{
    font-size: 4.50vmin;
    margin: 0px;
  }
`
const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
`

function NavBar() {


  return (
    <NavigationContainer>
      <Logo>T</Logo>
      <Navigation>
        <Link href="#about">About Me</Link>
        <Link href="#projects">My Projects</Link>
        <Link href="#contact">Contact Me</Link>
      </Navigation>
    </NavigationContainer>
  );
}

export default NavBar;