import React from "react"
import styled from 'styled-components'
import { CustomText } from "../functions"

import Instagram from "../assets/Instagram.png"
import Facebook from "../assets/Facebook.png"
import Twitter from "../assets/Twitter.png"

const Container = styled.div`
  width: 100vw;
  height: 40vh;

  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  

  background-color: #285A43;
`

const Link = styled(CustomText)`
  border-bottom: 2px solid transparent;
  &:hover{
    cursor: pointer;
    border-bottom: 2px solid #fff;
  }
`

const Social = styled.img`
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 10px;
`

function Footer() {
  return (
    <Container>
      <CustomText size="32px" weight="900">Feel free to contact us</CustomText>
      <div style={{display: "flex", flexDirection:"row", gap:"75px"}}>
        <Social src={Instagram} alt="Instagram icon" loading="lazy"/>
        <Social src={Facebook} alt="Facebook icon" loading="lazy"/>
        <Social src={Twitter} alt="Twitter icon" loading="lazy"/>
      </div>
      <div style={{display: "flex", flexDirection:"row", gap:"60px"}}>
        <Link>Home</Link>
        <Link>About Us</Link>
        <Link>Plants</Link>
        <Link>Delivery</Link>
        <Link>Blog</Link>
        <Link>Contact Us</Link>
      </div>
    </Container>
  );
}

export default Footer;
