import React from "react"

import NavBar from "./components/NavBar"
import AnimatedBackground from "./components/StarsBackground/AnimatedBackground"
import Content from "./components/Content"

function Container() {
  return (
    <>
      <AnimatedBackground/>
      <NavBar/>
      <Content/>
    </>
  );
}

export default Container;