import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Logo from "../assets/Logo.png";
import Spacer from "../assets/Spacer.png";

const Container = styled.div`
  width: 100vw;
  height: 121px;
  background-color: #0c0b08;
  border-bottom: 1px solid #2c291e;

  position: fixed;
  top: ${props => (props.scrollDirection === "down" ? "-121px" : "0px")};
  transition: all 0.5s;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
`;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;

  padding-left: 120px;
  gap: 32px;
`;
const ActionMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
`;
const Link = styled.a`
  cursor: pointer;
  color: #ffffff;
  border-bottom: 1px solid #000000;

  font-family: "Open Sans", sans-serif;
  font-size: 16px;

  text-decoration: none;
  &:hover {
    transform: scale(1.1);

    border-bottom: 1px solid #ffffff;
  }
`;

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let delta = 5;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > delta || scrollY - lastScrollY < -delta)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <Container scrollDirection={scrollDirection}>
      <img src={Logo} alt="gericht logo" />
      <NavBar>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#specials">Today’s Special</Link>
        <Link href="#blog">Blog</Link>
        <Link href="#contact">Contact Us</Link>
      </NavBar>
      <ActionMenu>
        <Link>Log In / Registration</Link>
        <img src={Spacer} alt="spacer" loading="lazy" />
        <Link>Book Table</Link>
      </ActionMenu>
    </Container>
  );
}

export default Header;
