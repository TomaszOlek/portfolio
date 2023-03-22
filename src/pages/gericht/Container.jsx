import React, { useEffect } from "react";

import Video from "./components/Video";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TodaySpecial from "./components/TodaySpecial";
import ChefWord from "./components/ChefWord";
import OurLaurels from "./components/OurLaurels";
import PhotoGallery from "./components/PhotoGallery";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }

  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    },
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

function Container() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem);

        ScrollTrigger.create({
          trigger: elem,
          once: true,
          // markers: true,
          onEnter: function () {
            animateFrom(elem);
          },
          // onEnterBack: function() {animateFrom(elem, -1)},
          // onLeave: function() {hide(elem)}
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <TodaySpecial />
      <ChefWord />
      <Video />
      <OurLaurels />
      <PhotoGallery />
      <FindUs />
      <Footer />
    </>
  );
}

export default Container;
