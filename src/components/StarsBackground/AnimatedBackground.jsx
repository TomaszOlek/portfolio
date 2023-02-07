import React, { useMemo } from "react";
import styled from 'styled-components';
import MovingStar from './MovingStar'

const StarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  position: fixed;
  overflow: hidden;
`;

function AnimatedBackground() {

  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      const initialLeft = Math.floor(Math.random() * 100);
      const speed = Math.floor(Math.random() * 45) + 10;
      const size = Math.random() * 3 + 2;
      const rightSpeed = Math.random() * 0.03 + 0.02;
      arr.push(
        <MovingStar
          key={i}
          initialTop={i * 0.5}
          initialLeft={initialLeft}
          speed={speed}
          size={size}
          rightSpeed={rightSpeed}
        />
      );
    }
    return arr;
  }, []);

  return (
    <StarContainer>
      {stars}
    </StarContainer>
  );
}

export default AnimatedBackground;