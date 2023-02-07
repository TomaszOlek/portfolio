import React from "react"
import styled from 'styled-components';
import { CustomText } from "../functions"

import Gallery1 from "../assets/Gallery1.png"
import Gallery2 from "../assets/Gallery2.png"
import Gallery3 from "../assets/Gallery3.png"
import Gallery4 from "../assets/Gallery4.png"
import Gallery5 from "../assets/Gallery5.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin-top: 40px;
`

const Content = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`

function Gallery() {
  return (
    <Container>
      <CustomText color="#285A43" size="36px" weight="600" className="gs_reveal">Our Gallery View</CustomText>
      <Content className="gs_reveal">
        <div>
          <img src={Gallery1} alt="Gallery 1" loading="lazy" style={{ width: "500px", height: "660px"}}/> 
        </div>
        <div>
          <div style={{marginBottom: "6px"}} className="gs_reveal gs_reveal_fromRight">
            <img src={Gallery2} alt="Gallery 2" loading="lazy" style={{ width: "459px", height: "325px", marginRight: "10px"}}/>
            <img src={Gallery3} alt="Gallery 3" loading="lazy" style={{ width: "459px", height: "325px"}}/>
          </div>
          <div className="gs_reveal gs_reveal_fromRight">
            <img src={Gallery4} alt="Gallery 4" loading="lazy" style={{ width: "459px", height: "325px", marginRight: "10px"}}/>
            <img src={Gallery5} alt="Gallery 5" loading="lazy" style={{ width: "459px", height: "325px"}}/>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Gallery;
