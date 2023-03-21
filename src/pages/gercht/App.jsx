import React from "react";
import { createGlobalStyle } from "styled-components";

import Container from "./Container";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 121px 0 0 0;
    background-color: #0C0B08;

    font-family: Jost, sans-serif;
    
    overflow-x: hidden;
    overflow-y: scroll;
  }
  
  ::-webkit-scrollbar {
    width: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
