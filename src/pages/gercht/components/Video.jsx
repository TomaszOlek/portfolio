import React from "react";
import styled from 'styled-components';

import VideoImage from "../assets/Video.png";
import PlayButton from "../assets/PlayButton.png";

const Container = styled.div`
  width: 100vw;
  height: 722px;
  background: url(${VideoImage});
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.3);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: box-shadow 0.5s;
  &:hover{
    box-shadow: none;
  }
`;
const StartButton = styled.img`
  &:after{
    content:"";
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
  }
`;
const Ellipse = styled.div`
  width: 50px;
  height: 50px;
  padding: 25px 23px 25px 27px;

  border: solid 1px white;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;


function Video() {
  return (
    <Container>
      <Ellipse>
        <StartButton src={PlayButton} alt="PlayButton" loading="lazy"/>
      </Ellipse>
    </Container>
  );
}
  
export default Video;