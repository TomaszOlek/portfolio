import styled from "styled-components";
import React from "../../assets/React.svg";

import Phone from "../../assets/Phone.svg";

function ProjectDetails({ projectData }) {
  return (
    <Container>
      <h1>{projectData.name}</h1>
      <Content>
        <div>
          <PreviewImage src={projectData.image} alt="" />
          <Logos>
            {projectData.stack.map(item => (
              <Logo src={item} alt="" />
            ))}
            <Logo
              src={Phone}
              responsiveColor={projectData.responsivnes}
              alt=""
            />
          </Logos>
        </div>

        <About>
          <span dangerouslySetInnerHTML={{ __html: projectData.about }} />
        </About>
      </Content>

      <Links>
        <div>
          <p>Live View:</p>
          {projectData.liveView.map(link => (
            <a href={link} target="_blank">
              Page
            </a>
          ))}
        </div>
        <div>
          <p>Design:</p>
          {projectData.design.length > 0 ? (
            <>
              {projectData.design.map(link => (
                <a href={link} target="_blank">
                  Link
                </a>
              ))}
            </>
          ) : (
            <p>No Design</p>
          )}
        </div>
        <div>
          <p>Code:</p>
          {projectData.code.map(link => (
            <a href={link} target="_blank">
              Code
            </a>
          ))}
        </div>
      </Links>
    </Container>
  );
}

export default ProjectDetails;

const filterColors = {
  low: "invert(22%) sepia(83%) saturate(4412%) hue-rotate(11deg) brightness(96%) contrast(102%)",
  medium:
    "invert(60%) sepia(93%) saturate(1126%) hue-rotate(11deg) brightness(104%) contrast(101%)",
  heigh:
    "invert(39%) sepia(96%) saturate(1258%) hue-rotate(89deg) brightness(109%) contrast(113%)",
};

const Container = styled.div`
  width: 750px;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  backdrop-filter: blur(3.3px);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: rgba(216, 216, 216, 0.194);
  border: 1px solid rgba(182, 182, 182, 0.946);
  border-radius: 20px;
  z-index: 11;
`;
const PreviewImage = styled.img`
  width: 350px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  gap: 20px;

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  & > div:nth-last-child(1) {
    margin-left: auto;
  }
`;
const Logos = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px 10px;

  & > img:nth-last-child(1) {
    margin-left: auto;
  }
`;
const Logo = styled.img`
  width: 24px;
  height: 24px;

  filter: ${props =>
    props.responsiveColor ? filterColors[props.responsiveColor] : ""};
`;
const About = styled.p`
  align-self: flex-start;
  width: 320px;
  max-height: 250px;

  font-weight: 600;
  line-height: 22px;
  margin: 5px 0 0 0;

  & > span {
    white-space: pre-line;
  }
`;
