import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";

import { CustomText, Button } from "../functions";

const Container = styled.div`
  width: 100vw;
  height: 100px;

  position: absolute;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Link = styled(CustomText)`
  height: 23px;
  border-bottom: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #fff;
  }
`;

function Header() {
  return (
    <Container className="gs_reveal">
      <img
        alt="lush logo"
        loading="lazy"
        src={logo}
        style={{
          width: "105px",
          height: "64px",
          marginRight: "auto",
          marginLeft: "120px",
        }}
      />
      <Link>Home</Link>
      <Link>About Us</Link>
      <Link>Planters</Link>
      <Link>Contact</Link>
      <Button style={{ marginRight: "150px" }}>Call Us</Button>
    </Container>
  );
}

export default Header;
