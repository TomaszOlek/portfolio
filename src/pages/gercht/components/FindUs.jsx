import React from "react";
import styled from 'styled-components';

import BackgroundImage from "../assets/BackgroundImage.png";
import SpoonRight from "../assets/SpoonRight.png";
import FindUsImage from "../assets/FindUsImage.png";

import { Paragraf, Header1, Header2, Button } from "../functions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${BackgroundImage});
  box-shadow: inset 0 0 0 1000px rgba(4, 4, 4,.5);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;
const Box = styled.div`
  width: 435px;
  height: 435px;
  background-color: #DCCA87;

  position: relative;
  top: ${props => true && props.top};
  left : ${props => true && props.left};
  bottom: ${props => true && props.bottom};
  right : ${props => true && props.right};
`;

function FindUs() {
  return (
    <Container id="contact">
      <div className="gs_reveal gs_reveal_fromLeft">
        <Header2>Contact</Header2>
        <img src={SpoonRight} alt="SpoonRight" loading="lazy"/>
        <Header1 margin="30px 0 70px 0">Find Us</Header1>
        <Paragraf margin="0 0 15px 0" >Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</Paragraf>
        <Header2 color="#DCCA87">Opening Hours</Header2>
        <Paragraf color="#FFF" margin="20px 0 9px 0">Mon - Fri: 10:00 am - 02:00 am</Paragraf>
        <Paragraf color="#FFF">Sat - Sun: 10:00 am - 03:00 am</Paragraf>
        <Button style={{marginTop:"40px"}}>Visit Us</Button>
      </div>
      <div className="gs_reveal gs_reveal_fromRight">
        <div style={{position:"absolute", width:"0"}}>
          <Box bottom="24px" left="209px"/>
        </div>
        <img src={FindUsImage} alt="FindUsImage" loading="lazy" style={{position: "relative", zIndex:"1"}}/>
        <div style={{position:"absolute", width:"0"}}>
          <Box bottom="415px" right="24px"/>
        </div>
      </div>
    </Container>
  );
}
  
export default FindUs;