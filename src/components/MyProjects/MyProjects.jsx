import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectDetails from "./ProjectDetails";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Gericht from "../../assets/Gericht_Project.png";
import Netflix from "../../assets/Netflix_Project.png";
import TalkItThrough from "../../assets/TalkItThrough_Project.png";
import Reddit from "../../assets/Reddit_Project.png";

function MyProjects() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  gsap.defaults({ ease: "none" });

  const [proejctData, setProjectData] = useState({});
  const [isProjectDataVisible, setIsProjectDataVisible] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const pulses = gsap
        .timeline({
          defaults: {
            duration: 0.2,
            autoAlpha: 1,
            scale: 1,
            transformOrigin: "center",
            ease: "elastic(1.2, 1)",
          },
        })
        .to(".project1", {}, 0.01)
        .to(".project2", {}, 0.2)
        .to(".project3", {}, 0.43)
        .to(".project4", {}, 0.7);

      const main = gsap
        .timeline({
          defaults: { duration: 1 },
          scrollTrigger: {
            trigger: "#svg",
            scrub: true,
            start: "top center",
            end: "110%",
            // markers: true
          },
        })
        .to(".ball01", { duration: 0.02, scale: 1 })
        .to(
          ".ball01",
          {
            motionPath: {
              path: ".theLine",
              align: ".theLine",
              alignOrigin: [0.5, 0.5],
            },
          },
          0,
        )
        .add(pulses, 0)
        .to(".ball01", { duration: 0.02, scale: 0 });
    });

    return () => ctx.revert();
  }, []);

  const handelProjectClick = project => {
    setProjectData(project);
    setIsProjectDataVisible(true);
  };

  return (
    <Container id="projects">
      <Clip>
        <h2 style={{ color: "#fff" }}>My Projects</h2>
        <Projects>
          <svg
            id="svg"
            className="projectpath"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 1200"
          >
            <style>{svgStyles}</style>

            <path className="brakeline line" d="M 397 -102 l 22 32"></path>

            {/* <path className="line" d="M 10 170  600 170"></path>
            <path className="line" d="M 10 580  600 580"></path>
            <path className="line" d="M 10 1050  600 1050"></path>
            <path className="line" d="M 10 1500  600 1500"></path> */}

            <path
              className="theLine"
              d="
              M 408 -86 Q -41 169 349 365 T 326 780 Q -202 1039 290 1241 T 212 1833
              "
              fill="none"
              stroke="white"
              strokeWidth="8px"
            />

            <path className="brakeline line" d="M 201 1820 L 223 1849"></path>

            <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
          </svg>

          {options.map((item, index) => (
            <Project
              top={item.position.top}
              left={item.position.left}
              className={`project${index + 1}`}
              onClick={() => handelProjectClick(item)}
              key={index}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </Project>
          ))}
        </Projects>
      </Clip>
      <div
        style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
        onClick={() => setIsProjectDataVisible(false)}
      >
        {isProjectDataVisible && (
          <ProjectInfo>
            <ProjectDetails proejctData={proejctData} />
          </ProjectInfo>
        )}
      </div>
    </Container>
  );
}

export default MyProjects;

const options = [
  {
    name: "Gericht and Lush Page",
    image: Gericht,
    liveView: "http://127.0.0.1:5173/gercht",
    code: "https://github.com/TomaszOlek/portfolio/tree/master/src/pages/gercht",
    figma: [
      "https://www.figma.com/file/67ZtAj8USVbe88mkUobEdV/Modern-UI%2FUX%3A-Gericht-(Copy)?node-id=0-1&t=MQq4Y5GYhgsd31oD-0",
      "https://www.figma.com/file/t0IFgkLMoP8WclRrKhhshY/Lush-Garden---Florist-Landing-Page-Design?node-id=1-1210&t=lLzMeQfeu2vDSqhj-0",
    ],
    position: {
      top: "210px",
      left: "320px",
    },
  },
  {
    name: "Netflix - Main dashboard",
    image: Netflix,
    liveView: "https://magical-chebakia-84e3fd.netlify.app/",
    code: "https://github.com/TomaszOlek/netflix-main-dashbord",
    figma: ["https://www.figma.com/file/BsK0T6RnoKInhQ6xiksKQm/Design"],
    position: {
      top: "620px",
      left: "100px",
    },
  },
  {
    name: "Talk It Through - Chat",
    image: TalkItThrough,
    liveView: "https://fullstack-talkitthrough.vercel.app/",
    code: "https://github.com/TomaszOlek/fullstack-talkitthrough",
    figma: [""],
    position: {
      top: "1070px",
      left: "280px",
    },
  },
  {
    name: "Reddit Main Page",
    image: Reddit,
    liveView: "https://clever-kataifi-93f81c.netlify.app/",
    code: "https://github.com/TomaszOlek/reddit-main-page",
    figma: [
      "https://www.figma.com/file/CWjXH3THR1TrERzfUFhl7z/Design?node-id=0-1&t=CXjQybFt75q2n7Yl-0",
    ],
    position: {
      top: "1550px",
      left: "110px",
    },
  },
];

const svgStyles = `
  .line {
    fill: none;
    stroke: white;
    stroke-width: 2px;
  }
  .brakeline {
    stroke-width: 10px;
  }
  .projectpath {
    max-width: 600px;
    overflow: visible;
    margin-top: 150px;
  }
  .ball01 {
    fill: white;
    border-radius: 50%;
    transform: scale(0);
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 2200px;

  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;
const Clip = styled.div`
  width: 50%;
  height: 100%;
  min-width: 700px;
  padding-top: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 16px;
  backdrop-filter: blur(3.3px);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: rgba(118, 118, 118, 0.14);
  border: 1px solid rgba(118, 118, 118, 0.32);
`;
const Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: relative;
  width: 600px;
  height: 100%;
`;
const Project = styled.div`
  position: absolute;
  top: ${props => (props.top ? props.top : 0)};
  left: ${props => (props.left ? props.left : 0)};

  width: 300px;
  height: 186px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #ffffff;

  transform: scale(0);
  filter: brightness(76%);
  transform-origin: center;

  &:hover {
    filter: brightness(105%);
  }
`;
const ProjectInfo = styled.div`
  content: "";
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background-color: #00000074;
`;
