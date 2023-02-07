import React, { useState, useRef } from "react"
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

import Lush from "../../assets/Lush.png"
import Gericht from "../../assets/Gericht.png"

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;
const Clip = styled.div`
  width: 70%;
  height: 60%;

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
const Project = styled.div`
  width: 80%;
  height: 70%;
  background-color: #5353535a;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
`
const Test = styled.ul`
  height:90%;
  max-width: 300px;
  padding: 0;
  align-self: center;
  flex: 1;
  margin: 30px 20px 0px 20px;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  &:after {
    content: '';
    position: relative;
    top: -2px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    background: yellow;
  }
`
const Item = styled.li`
  width: 95%;
  height: 10%;

  align-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:first-child > a{
    margin-top: 5px;
    border-top-right-radius: 20px;
  }
  &:last-child > a{
    border-bottom-right-radius: 20px;
  }
`
const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: ${props => props.disabled ? "#949494" : "#fff"};
  border: transparent;
  border-radius: 4px;
  outline: none;

  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,${props => props.disabled ? "#5c5c5c" : "#D6D6E7"} 0 -3px 0 inset;
  color: #36395A;
  
  box-sizing: border-box;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  padding: 10px 16px 0 16px;

  position: relative;
  transition: box-shadow .15s,transform .15s;
  font-size: 18px;

  transform-style: flat;
  transition: all 250ms ease-out;
  
  ${props => !props.disabled && `
    &:focus {
      box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    &:hover {
      box-shadow: rgba(189, 189, 189, 0.4) 0 4px 8px, rgba(255, 255, 255, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: #D6D6E7 0 3px 7px inset;
      transform: translateY(2px);
    }
  `};
`
const Contnet = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  flex: 1;
  border-right: 1px solid #8b8b8b;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s ease-in-out forwards;
`
const Redirect = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:focus{
    color: #fff;
  }
`
const Anchor = styled.a`
  text-decoration: none;
  color: #fff;

  &:focus{
    color: #fff;
  }
`

const Options = [
  {
    Name: "Gericht Page",
    Image: Gericht,
    LiveView: "/gercht",
    Code: "",
    Figma: "https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?t=xiqpT2OZ0zRaXuIL-0"
  },
  {
    Name: "Lush Page",
    Image: Lush,
    LiveView: "/lush",
    Code: "",
    Figma: "https://www.figma.com/community/file/1198094410138226771"
  },
  {
    Name: "Coming soon",
    Image: "",
    LiveView: "",
    Code: "",
    Figma: ""
  },
  {
    Name: "Coming soon",
    Image: "",
    LiveView: "",
    Code: "",
    Figma: ""
  },
  {
    Name: "Coming soon",
    Image: "",
    LiveView: "",
    Code: "",
    Figma: ""
  },
]

function MyProjects() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const textRef = useRef();

  const handleClick = index => {
    textRef.current.addEventListener("animationend", () => {
      setSelectedIndex(index);
      setIsVisible(true);
    });
    setIsVisible(false);
  };

  return (
    <Container id="projects">
      <Clip>  
        <h2 style={{color:"#fff"}}>My Projects</h2>

        <Project>
          <Contnet ref={textRef} isVisible={isVisible}>
            {Options[selectedIndex] && (
              <div style={{ maxWidth:"400px"}}>
              <img src={Options[selectedIndex].Image} style={{maxWidth:"80%"}} />
              <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", gap: "20px", marginTop: "15px"}}>
                <Redirect to={Options[selectedIndex].LiveView}>Live View</Redirect>
                <Anchor href={Options[selectedIndex].Code} target="_blank">Code</Anchor>
                <Anchor href={Options[selectedIndex].Figma} target="_blank">Figma design</Anchor>
              </div>
            </div>
            )}
          </Contnet>

          <div style={{ width:"40%", height:"100%", alignItems:"center", maxWidth: "370px", display: "flex", justifyContent: "center" }}>
            <Test>
              {Options.map((option, index) => (
                <Item key={index} style={{listStyle:"none"}}><Button onClick={(() => handleClick(index))} disabled={option.Name === "Coming soon" ? true : false}> {option.Name} </Button></Item>
              ))}
            </Test>
          </div>
        </Project>

      </Clip>
    </Container>
  );
}
  
export default MyProjects;
  