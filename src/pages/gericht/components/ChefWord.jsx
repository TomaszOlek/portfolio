import React from "react";
import styled from "styled-components";

import BackgroundImage from "../assets/BackgroundImage.png";
import ChefImage from "../assets/Chef.png";
import SpoonRight from "../assets/SpoonRight.png";
import DoubleQuoteMark from "../assets/DoubleQuoteMark.png";

import { CustomText, Paragraf, Header1, Header2, Header3 } from "../functions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${BackgroundImage});
  box-shadow: inset 0 0 0 1000px rgba(4, 4, 4, 0.5);
  padding-bottom: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 120px;
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

function ChefWord() {
  return (
    <Container>
      <ImageContainer className="gs_reveal gs_reveal_fromLeft">
        <div style={{ position: "absolute", width: "0" }}>
          <Box bottom="24px" left="175px" />
        </div>
        <img
          src={ChefImage}
          alt="fish_image"
          loading="lazy"
          style={{ position: "relative", zIndex: "1" }}
        />
        <div style={{ position: "absolute", width: "0" }}>
          <Box bottom="415px" right="24px" />
        </div>
      </ImageContainer>
      <div style={{ width: "570px" }} className="gs_reveal gs_reveal_fromRight">
        <Header2>Chef’s Word</Header2>
        <img src={SpoonRight} loading="lazy" alt="SpoonImage" />
        <Header1>What We Believe In</Header1>
        <div style={{ margin: "80px 0 80px 0" }} className="gs_reveal">
          <img
            src={DoubleQuoteMark}
            alt="DoubleQuoteMark"
            loading="lazy"
            style={{ width: "47px", float: "left", paddingRight: "10px" }}
          />
          <Paragraf style={{ paddingTop: "15px", fontStyle: "italic" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </Paragraf>
        </div>
        <Header3 color="#DCCA87" margin="0">
          Kevin Luo
        </Header3>
        <Paragraf color="#AAAAAA">Chef & Founder</Paragraf>
        <CustomText
          family="Great Vibes"
          size="64px"
          color="#AAAAAA"
          margin="70px 0 0 0"
        >
          Kevin Luo
        </CustomText>
      </div>
    </Container>
  );
}

export default ChefWord;
