import React from "react";
import styled from 'styled-components';

import SpoonLeft from "../assets/SpoonLeft.png";
import SpoonRight from "../assets/SpoonRight.png";
import Knife from "../assets/Knife.png";
import BackgroundImage from "../assets/BackgroundImage.png";
import G from "../assets/G.png";

import { Paragraf, Header1, Button } from "../functions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${BackgroundImage});
  box-shadow: inset 0 0 0 1000px rgba(4, 4, 4,.5);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 85px;
`;
const Content = styled.div`
  width: 523px;
  height: 292px;

  z-index: 1;
  display: flex;
  flex-direction: column;
`;

function About() {
  return (
    <Container id="about">
      <div style={{position:"absolute"}}>
        <img src={G} alt="Big-G" style={{width: "391px", height: "415px"}}/>
      </div>

      <Content className="gs_reveal gs_reveal_fromLeft">
        <Header1 align="right">About Us</Header1>
        <img src={SpoonLeft} alt="SpoonLeft" style={{marginLeft: "auto", width: "40px", height: "9px", marginBottom: "15px"}}/>
        <Paragraf align="right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </Paragraf>
        <Button style={{margin: "30px 0 0 auto"}}>Know More</Button>
      </Content>

      <img src={Knife} alt="Knife" style={{width: "84px", height: "703px", zIndex:"1"}} className="gs_reveal"/>

      <Content className="gs_reveal gs_reveal_fromRight">
        <Header1>Our History</Header1>
        <img src={SpoonRight} alt="SpoonRight" style={{position: "relative", width: "40px", height: "9px", marginBottom: "15px"}}/>
        <Paragraf>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </Paragraf>
        <Button style={{margin: "30px 0 0 0"}}>Know More</Button>
      </Content>

    </Container>
  );
}
  
export default About;