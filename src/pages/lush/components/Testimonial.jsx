import React from "react"
import styled from 'styled-components';
import { CustomText } from "../functions"

import Person1 from "../assets/Person1.png"
import Person2 from "../assets/Person2.png"
import Person3 from "../assets/Person3.png"
import BackgroundPlant1 from "../assets/BackgroundPlant1.png"
import BackgroundPlant2 from "../assets/BackgroundPlant2.png"
import BackgroundPlant3 from "../assets/BackgroundPlant3.png"

const Container = styled.div`
  width: 100vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`

const Box = styled.div`
  width: 360px;
  height: 330px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 31px;

  box-sizing: border-box;
  padding: 40px;

  background: #F8F8F8;
`


function Testimonial() {
  return (
    <Container>
      <CustomText color="#285A43" size="36px" weight="600" className="gs_reveal">What Do They Say About Us</CustomText>

      <div style={{display: "flex", flexDirection: "row", gap: "70px"}}>
        <Box className="gs_reveal">
          <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center"}}>
            <img src={Person1} alt="Person 1 testimonia" loading="lazy" style={{ width: "64px" , height: "64px"}} />
            <CustomText align="left" color="#285A43" family="Lato" size="20px" weight="600">Jessica Watson</CustomText>
          </div>
          <CustomText align="left" color="#121212">“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”</CustomText>
          <div style={{position: "relative"}}>
            <img src={BackgroundPlant1} alt="background plant" loading="lazy" style={{ position:"absolute", left:"65px", bottom: "-52px"}} />
          </div>
        </Box>
        <Box className="gs_reveal">
          <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center"}}>
            <img src={Person2} alt="Person 2 testimonia" loading="lazy" style={{ width: "64px" , height: "64px"}} />
            <CustomText align="left" color="#285A43" family="Lato" size="20px" weight="600">Kate Szu</CustomText>
          </div>
          <CustomText align="left" color="#121212">"Great service, beautiful flowers, timely delivery. Highly recommend."</CustomText>
          <div style={{position: "relative"}}>
            <img src={BackgroundPlant2} alt="background plant" loading="lazy" style={{ position:"absolute", left:"145px", bottom: "-109px"}} />
          </div>
        </Box>
        <Box className="gs_reveal">
          <div style={{display: "flex", flexDirection: "row", gap: "20px", alignItems: "center"}}>
            <img src={Person3} alt="Person 1 testimonia" loading="lazy" style={{ width: "64px" , height: "64px"}} />
            <CustomText align="left" color="#285A43" family="Lato" size="20px" weight="600">Grace </CustomText>
          </div>
          <CustomText align="left" color="#121212">"I am very happy with my purchase from this website, the plants were healthy and arrived on time.”</CustomText>
          <div style={{position: "relative"}}>
            <img src={BackgroundPlant3} alt="background plant" loading="lazy" style={{ position:"absolute", left:"125px", bottom: "-81px"}} />
          </div>
        </Box>
      </div>
    </Container>
  );
}

export default Testimonial;
