import React from "react"
import styled from 'styled-components';
import { CustomText, Button } from "../functions"

import Tree from "../assets/Tree.png"


const Container = styled.div`
  width: 100vw;
  height: 50vh;
  margin-top: 50px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;

  background-image: url(${Tree});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Input = styled.input`
  width: 475px;
  height: 50px;
  margin-top: 50px;

  border: 1px solid #FFFFFF;
  color: #FFFFFF;

  background: transparent;
  backdrop-filter: blur(2.5px);
  border-radius: 5px;
  padding: 12px 25px;
  box-sizing: border-box;
  margin-bottom: 80px;
`

function CTA() {
  return (
    <Container>
      <CustomText family="Lato" height="48px" size="32px" weght="700" align="left" style={{width: "570px"}} className="gs_reveal gs_reveal_fromLeft">Enter your email address for our mailing Promo or other interesting things</CustomText>
      <Input placeholder="Enter your email" className="gs_reveal gs_reveal_fromRight"/>
      <Button fill={true} width="145px" height="50px" style={{marginBottom:"30px"}} className="gs_reveal gs_reveal_fromRight">Submit</Button>
    </Container>
  );
}

export default CTA;
