import React from "react";
import styled from 'styled-components';
import { IconContext } from "react-icons";

import { GrFacebookOption } from 'react-icons/gr';
import { TfiTwitter } from 'react-icons/tfi';
import { FaInstagram } from 'react-icons/fa';

import BackgroundImage from "../assets/BackgroundImage.png";
import SpoonRight from "../assets/SpoonRight.png";

import { Paragraf, Header1, Header2, Header3, Button } from "../functions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0C0B08;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const SubscribeContainer = styled.div`
  height: 35%;
  width: 1300px;
  margin-top: 40px;

  border: 1px solid #F5EFDB;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubscribeInput = styled.input`
  width: 617px;
  height: 60px;
  padding-left: 18px ;

  background-color: transparent;
  border: 1px solid #F5EFDB; 
  color: #FFF;

  font-family: 'Cormorant Upright';
  font-weight: 600;
`;
const FooterContainer = styled.div`
  width: 100vw;
  height: 55%;

  background: url(${BackgroundImage});
  box-shadow: inset 0 0 0 1000px rgba(4, 4, 4,.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <Container>
      <SubscribeContainer>
        <Header2>Newsletter</Header2>
        <img src={SpoonRight} alt="SpoonRight" loading="lazy"/>
        <Header1 margin="30px 0 10px 0">Subscribe To Our Newsletter</Header1>
        <Paragraf color="#FFF" margin="20px 0 40px 0">And never miss latest Updates!</Paragraf>
        <div style={{ width:"796px", height:"60px", display:"flex", justifyContent:"space-between", alignItems: "center" }}>
          <SubscribeInput placeholder="Email Address" />
          <Button>Subscribe</Button>
        </div>
      </SubscribeContainer>
      <FooterContainer>
        <div style={{display:"flex", flexDirection:"row", gap:"125px", marginBottom:"80px"}}>
          <div style={{width:"306px"}}>
            <Header3 align="center">Contact Us</Header3>
            <Paragraf align="center" margin="0 0 10px 0">9 W 53rd St, New York, NY 10019, USA</Paragraf>
            <Paragraf align="center">+1 212-344-1230</Paragraf>
            <Paragraf align="center">+1 212-555-1230</Paragraf>
          </div>
          <div style={{width:"438px", display:"flex",flexDirection:"column"}}>
            <Header1 align="center" margin="20px 0 60px 0" style={{textTransform: "uppercase"}}>Gerícht</Header1>
            <Paragraf align="center" color="#FFF" margin="20px 0">"The best way to find yourself is to lose yourself in the service of others.”</Paragraf>
            <img src={SpoonRight} alt="SpoonRight" loading="lazy" style={{alignSelf:"center", marginBottom:"16px"}}/>
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
              <div style={{display: "flex", justifyContent:"center", gap:"16px"}}>
                <GrFacebookOption size="24px"/>
                <TfiTwitter size="24px"/>
                <FaInstagram size="24px"/>
              </div>
            </IconContext.Provider>
          </div>
          <div style={{width:"306px"}}>
            <Header3 align="center">Working Hours</Header3>
            <Paragraf align="center">Monday-Friday:</Paragraf>
            <Paragraf align="center" margin="0 0 10px 0">08:00 am -12:00 am</Paragraf>
            <Paragraf align="center">Saturday-Sunday:</Paragraf>
            <Paragraf align="center">07:00am -11:00 pm</Paragraf>
          </div>
        </div>
        <Paragraf>2021 Gerícht. All Rights reserved.</Paragraf>
      </FooterContainer>
    </Container>
  );
}
  
export default Footer;