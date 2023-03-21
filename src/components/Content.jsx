import React from "react";
import styled from "styled-components";

import Hero from "./Hero/Hero";
import MyProjects from "./MyProjects/MyProjects";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  scroll-snap-type: y mandatory;
`;

// min device width 900px

function Content() {
  return (
    <Page>
      <Hero />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </Page>
  );
}

export default Content;
