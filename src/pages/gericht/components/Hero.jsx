import React from "react";
import styled from "styled-components";

import FishImage from "../assets/Fish.png";
import Spoon from "../assets/SpoonRight.png";
import Line from "../assets/Line.png";
import Line2 from "../assets/Line2.png";

import { CustomText, Paragraf, Header2, Button } from "../functions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0c0b08;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 1300px;
  height: 736px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ImageContainer = styled.div`
  isolation: auto;
`;
const Box = styled.div`
  width: 435px;
  height: 435px;
  background-color: #dcca87;

  position: relative;
  top: ${props => true && props.top};
  left: ${props => true && props.left};
  bottom: ${props => true && props.bottom};
  right: ${props => true && props.right};
`;
const SideText = styled.div`
  position: relative;
  right: 770px;
  bottom: 10px;
  transform: rotateZ(-90deg);
  z-index: 10;
`;
const PagesNavigation = styled.div`
  padding-top: 24px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const ScrollDown = styled.div`
  position: relative;
  left: 750px;
  top: 310px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

function Hero() {
  return (
    <Container id="home">
      <div style={{ position: "absolute", width: "0" }} className="gs_reveal">
        <SideText>
          <Paragraf color="#FFFFFF">#Bar_Gericht</Paragraf>
        </SideText>
      </div>
      <Content className="gs_reveal">
        <div style={{ width: "453px", height: "481px" }}>
          <Header2 style={{ textTransform: "capitalize" }}>
            Chase the new Flavour
          </Header2>
          <img src={Spoon} alt="spoon_image" loading="lazy" />
          <CustomText
            style={{ textTransform: "capitalize" }}
            weight="700"
            size="90px"
            height="117px"
            spacing="0.03em"
            color="#DCCA87"
          >
            The key to Fine dining
          </CustomText>
          <Paragraf margin="25px 0px 25px 0">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </Paragraf>
          <Button width="157px">Explore Menu</Button>
        </div>
        <ImageContainer>
          <div style={{ position: "absolute", width: "0" }}>
            <Box bottom="24px" left="207px" />
          </div>
          <img
            src={FishImage}
            alt="fish_image"
            style={{ position: "relative", zIndex: "1" }}
          />
          <div style={{ position: "absolute", width: "0" }}>
            <Box bottom="407px" right="24px" />
          </div>
        </ImageContainer>
      </Content>
      <PagesNavigation className="gs_reveal">
        <CustomText
          style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
          weight="600"
        >
          01
        </CustomText>
        <img src={Line} alt="Line" loading="lazy" />
        <CustomText
          style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
          weight="600"
        >
          02
        </CustomText>
        <CustomText
          style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
          weight="600"
        >
          03
        </CustomText>
        <CustomText
          style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}
          weight="600"
        >
          04
        </CustomText>
      </PagesNavigation>
      <div style={{ position: "absolute", width: "0" }} className="gs_reveal">
        <ScrollDown>
          <img src={Line2} alt="Line" loading="lazy" />
          <CustomText
            style={{ textTransform: "uppercase" }}
            weight="700"
            color="#DCCA87"
          >
            Scroll
          </CustomText>
        </ScrollDown>
      </div>
    </Container>
  );
}

export default Hero;
