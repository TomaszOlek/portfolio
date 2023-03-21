import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";

const Star = styled.div`
  background-color: white;
  position: absolute;
`;

function MovingStar({ initialTop, initialLeft, speed, size, rightSpeed }) {
  const [top, setTop] = useState(initialTop);
  const [left, setLeft] = useState(initialLeft);

  const intervalId = useRef();

  useLayoutEffect(() => {
    intervalId.current = setInterval(() => {
      setTop(top + 0.1);
      setLeft(left + rightSpeed);
      if (top > 100) {
        setTop(-10);
        setLeft(Math.floor(Math.random() * 150) - 50);
      }
      if (left > 100) {
        setTop(-10);
        setLeft(Math.floor(Math.random() * 150) - 50);
      }
    }, speed);
    return () => clearInterval(intervalId.current);
  }, [top, left, speed, rightSpeed]);

  return (
    <Star
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}

export default MovingStar;
