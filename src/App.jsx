import React from "react";
import { createGlobalStyle } from "styled-components";

import Home from "./Container";

const GlobalStyle = createGlobalStyle`
  *{
    scroll-behavior: smooth;
    color: white;
  }

  body {
    font-family: Jost, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  
  ::-webkit-scrollbar {
    width: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
