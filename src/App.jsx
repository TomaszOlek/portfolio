import React from "react";
import { createGlobalStyle } from "styled-components";

import Routes from "./routes/AppRouterDynamic";

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
      <Routes />
    </>
  );
}

export default App;
