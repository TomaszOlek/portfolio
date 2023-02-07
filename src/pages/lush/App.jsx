import React, { useEffect } from "react"
import { createGlobalStyle } from 'styled-components';

import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Product from "./components/Product";
import Benefit from "./components/Benefit";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;

    overflow-x: hidden;
    overflow-y: scroll;
  }
  
  ::-webkit-scrollbar {
    width: 0;
  }
`;

gsap.registerPlugin(ScrollTrigger);

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }

  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

function App() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem)
        
        ScrollTrigger.create({
          trigger: elem,
          once: true,
          // markers: true,
          onEnter: function() { animateFrom(elem) }, 
          // onEnterBack: function() {animateFrom(elem, -1)},
          // onLeave: function() {hide(elem)}
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <GlobalStyle/>
      <Hero/>
      <AboutUs/>
      <Product/>
      <Benefit/>
      <Gallery/>
      <Testimonial/>
      <CTA/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
