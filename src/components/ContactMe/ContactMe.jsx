import React from "react"
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
  scroll-snap-align: start;
`;
const Clip = styled.div`
  width: 40%;
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 16px;
  backdrop-filter: blur(3.3px);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: rgba(118, 118, 118, 0.14);
  border: 1px solid rgba(118, 118, 118, 0.32);
`;
const Link = styled.a`
  width: 50px;
  height: 50px;
  position: relative;
  color: #fff;
  
  &:hover> .icon{
    width: 40px !important;
    height: 40px !important;
  }
`


function ContactMe() {
  return (
    <Container id="contact">
      <Clip>  
        <h2 style={{color:"#fff"}}>Contact Me</h2>
        <div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap: "40px"}}>
            <p>Email: tomasz.olek.dev@gmail.com</p>
            <p>Phone: +48 724 900 520</p>
          </div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center", gap:"20px", marginTop: "10px"}}>
            <Link href="https://www.linkedin.com/in/tomasz-olek-383b57241/" target="_blank"><Icon icon="uil:linkedin" className="icon" style={{ position: "absolute", width: "35px", height: "35px"}}/></Link>
            <Link href="https://github.com/TomaszOlek" target="_blank"><Icon icon="mdi:github" className="icon" style={{ position: "absolute", width: "35px", height: "35px"}}/></Link>
            <Link href="https://codepen.io/TomaszOlek" target="_blank"><Icon icon="simple-icons:codepen" className="icon" style={{ position: "absolute", width: "35px", height: "35px"}}/></Link>
          </div>
        </div>
      </Clip>
    </Container>
  );
}
  
export default ContactMe;
  