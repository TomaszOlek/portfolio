import React from "react";
import styled from "styled-components";

import BackgroundImage from "../assets/BackgroundImage.png";
import SpoonRight from "../assets/SpoonRight.png";
import MeatImage from "../assets/MeatImage.png";
import LaurelsLogo from "../assets/LaurelsLogo.png";
import Laurels1 from "../assets/Laurels1.png";
import Laurels2 from "../assets/Laurels2.png";
import Laurels3 from "../assets/Laurels3.png";
import Laurels5 from "../assets/Laurels5.png";

import { Paragraf, Header1, Header2 } from "../functions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${BackgroundImage});
  box-shadow: inset 0 0 0 1000px rgba(4, 4, 4, 0.5);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 111px;
`;
const LaurelsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-top: 64px;
`;
const LaurelsItem = styled.div`
  width: 300px;
  height: 100px;

  display: flex;
  flex-direction: row;
  gap: 32px;
`;
const LaurelsText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function OurLaurels() {
  return (
    <Container>
      <div style={{ position: "absolute" }}>
        <img
          src={LaurelsLogo}
          alt="LaurelsLogo"
          loading="lazy"
          style={{ position: "relative", bottom: "330px", right: "630px" }}
        />
      </div>
      <div style={{ width: "632px" }} className="gs_reveal gs_reveal_fromLeft">
        <Header2>Awards & recognition</Header2>
        <img src={SpoonRight} alt="SpoonRight" loading="lazy" />
        <Header1>Our Laurels</Header1>
        <LaurelsRow className="gs_reveal">
          <LaurelsItem>
            <img
              src={Laurels2}
              alt="Laurels2"
              loading="lazy"
              style={{ width: "79px", height: "79px", alignSelf: "center" }}
            />
            <LaurelsText>
              <Header2 color="#DCCA87">Bib Gourmond</Header2>
              <Paragraf>Lorem ipsum dolor sit amet, consectetur.</Paragraf>
            </LaurelsText>
          </LaurelsItem>
          <LaurelsItem>
            <img
              src={Laurels1}
              alt="Laurels1"
              loading="lazy"
              style={{ width: "79px", height: "79px", alignSelf: "center" }}
            />
            <LaurelsText>
              <Header2 color="#DCCA87">Rising Star</Header2>
              <Paragraf>Lorem ipsum dolor sit amet, consectetur.</Paragraf>
            </LaurelsText>
          </LaurelsItem>
        </LaurelsRow>
        <LaurelsRow className="gs_reveal">
          <LaurelsItem>
            <img
              src={Laurels5}
              alt="Laurels5"
              loading="lazy"
              style={{ width: "79px", height: "69px", alignSelf: "center" }}
            />
            <LaurelsText>
              <Header2 color="#DCCA87">AA Hospitality </Header2>
              <Paragraf>Lorem ipsum dolor sit amet, consectetur.</Paragraf>
            </LaurelsText>
          </LaurelsItem>
          <LaurelsItem>
            <img
              src={Laurels3}
              alt="Laurels3"
              loading="lazy"
              style={{ width: "79px", height: "79px", alignSelf: "center" }}
            />
            <LaurelsText>
              <Header2 color="#DCCA87">Outstanding Chef</Header2>
              <Paragraf>Lorem ipsum dolor sit amet, consectetur.</Paragraf>
            </LaurelsText>
          </LaurelsItem>
        </LaurelsRow>
      </div>
      <img
        src={MeatImage}
        alt="MeatImage"
        loading="lazy"
        style={{ width: "483px" }}
        className="gs_reveal gs_reveal_fromRight"
      />
    </Container>
  );
}

export default OurLaurels;
