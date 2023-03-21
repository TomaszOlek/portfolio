import React from "react";
import styled from "styled-components";
import { CustomText, Button } from "../functions";

import Header from ".//Header";

import background from "../assets/hero_background.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Pages = styled.div`
  position: absolute;
  right: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Link = styled(CustomText)`
  height: 23px;
  border-bottom: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #285a43;
    color: #285a43;
  }
`;

function Hero() {
  return (
    <Container>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <CustomText
          margin="0 0 22px 0"
          size="60px"
          weight="700"
          style={{ width: "1070px" }}
          className="gs_reveal"
        >
          Nature's Beauty Delivered to You
        </CustomText>
        <CustomText
          margin="0 0 22px 0"
          size="18px"
          style={{ width: "787px" }}
          className="gs_reveal"
        >
          Nature's beauty is just a click away with our online flower and plant
          shop. We offer a wide variety of flowers that will bring a touch of
          nature to your home!
        </CustomText>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "13px" }}
          className="gs_reveal"
        >
          <Button width="168px" hight="41px" fill={"true"}>
            Book Now
          </Button>
          <Button width="187px" hight="41px">
            Watch Video
          </Button>
        </div>
      </div>
      <Pages>
        <Link>01</Link>
        <Link>02</Link>
        <Link>03</Link>
      </Pages>
    </Container>
  );
}

export default Hero;
