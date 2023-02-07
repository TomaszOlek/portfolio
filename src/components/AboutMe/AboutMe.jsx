import React from "react"
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  scroll-snap-align: start;
`;
const Clip = styled.div`
  width: 50%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 50px;
  border-radius: 16px;
  backdrop-filter: blur(3.3px);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: rgba(118, 118, 118, 0.14);
  border: 1px solid rgba(118, 118, 118, 0.32);
`;


function AboutMe() {
  return (
    <Container id="about">
      <Clip>
        <h2>About Me</h2>
        <p style={{textAlign:"center"}}>
          I am a front-end developer with a passion for creating visually appealing websites.
          Although I may not have a vast amount of experience, I am a quick learner and I am always eager to take on new challenges.
          I am constantly working to improve my skills, and I am always seeking out new opportunities to expand my knowledge and expertise.
          I am committed to delivering quality work and exceeding client expectations.
        </p>
      </Clip>
    </Container>
  );
}
  
export default AboutMe;
  