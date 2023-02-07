import React from "react"
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  box-sizing: border-box;

  color: #fff;
`;
const Clip = styled.div`
  width: 800px;
  height: 430px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  backdrop-filter: blur(3.3px);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: rgba(118, 118, 118, 0.14);
  border: 1px solid rgba(118, 118, 118, 0.32);
`;

function Empty() {
  return (
    <Container>
      <Clip>Empty</Clip>
    </Container>
  );
}
  
export default Empty;
  