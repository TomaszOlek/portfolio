import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import BlinkingText from "./BlinkingText";

const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin-left: 10vw;

  color: #fff;
  z-index: 4;
  scroll-snap-align: start;
`;
const IntroductionText = styled.h1`
  text-transform: uppercase;
  font-family: verdana;
  font-size: 5.05vmin;
  line-height: 6vmin;
  font-weight: 700;
  margin: 0;
  color: #f5f5f5;

  text-shadow: -0.1vmin 0.1vmin 0.1vmin #9b9b9b,
    -0.15vmin 0.15vmin 0.1vmin #9b9b9b, -0.2vmin 0.2vmin 0.1vmin #9b9b9b,
    -0.25vmin 0.25vmin 0.1vmin #9b9b9b, -0.3vmin 0.3vmin 0.1vmin #9b9b9b,
    -0.32vmin 0vmin 0.1vmin #ffffff80, -3px 6px 10px #ffffff33,
    1px 9px 35px #ffffff33, 1px 10px 70px #ffffff66;
`;
const ProfessionnText = styled.div`
  padding-left: 1vmin;
  padding-top: 0.7vmin;

  font-size: 2vmin;
  font-weight: 500;
  line-height: 2.63vmin;
  text-decoration: underline;

  color: #828282;
`;
const Swing = styled.span`
  position: absolute;
  color: inherit;

  line-height: 55%;
  transform: translateY(12.5px);
`;

function Introduction() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline({ yoyo: true }).to(".swingAnimation", {
        duration: 15,
        rotation: "-45deg",
        transformOrigin: "top right",
        ease: "elastic.out( 1.5, 0.1)",
        delay: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container id="hero">
      <IntroductionText>Hi, I am</IntroductionText>
      <IntroductionText>
        Tomasz{" "}
        <BlinkingText>
          Ole<Swing className="swingAnimation">K</Swing>
        </BlinkingText>
      </IntroductionText>
      <ProfessionnText>a Frontend Developer</ProfessionnText>
      {/* <button style={{ width: "50px"}}>View My Resume</button> */}
    </Container>
  );
}

export default Introduction;
