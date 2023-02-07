import React from "react"
import styled from 'styled-components';
import { CustomText } from "../functions"

import Benefits_image from "../assets/Benefits_image.png"
import Time_Cosuming from "../assets/Time_Cosuming.png"
import Grow_Sprout from "../assets/Grow_Sprout.png"
import Temperature from "../assets/Temperature.png"
import Pruning from "../assets/Pruning.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Contnent = styled.div`
  width: 50vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`

const Benefits = styled.div`
  width: 25vw;
  height: 50vh;
  background-color: ${props => props.backgroundColor ?  props.backgroundColor : "#fff"};

  display: flex; 
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  box-sizing: border-box;
  padding: 52px;

`

function Benefit() {
  return (
    <Container>
      <img src={Benefits_image} alt="Benefits" loading="lazy" style={{width:"50vw", height:"100vh"}}/>
      <Contnent>
        <Benefits>
          <img src={Time_Cosuming} alt="Time cosuming" loading="lazy" style={{maxWidth: "126px", maxHeight: "126px"}} className="gs_reveal"/>
          <CustomText align="left" color="#285A43" family="Lato" size="20px" weight="600" style={{marginLeft: "16px"}} className="gs_reveal">Quality Product</CustomText>
          <CustomText align="left" color="#121212"  style={{marginLeft: "16px"}} className="gs_reveal">Our flowers are of the highest quality, carefully selected and sourced from reputable</CustomText>
        </Benefits>
        <Benefits backgroundColor="#F8F8F8">
          <img src={Grow_Sprout} alt="Grow sprout" loading="lazy" style={{maxWidth: "126px", maxHeight: "126px"}} className="gs_reveal"/>
          <CustomText align="left" color="#285A43" family="Lato" size="20px" weight="600" style={{marginLeft: "16px"}} className="gs_reveal">Always Fresh</CustomText>
          <CustomText align="left" color="#121212"  style={{marginLeft: "16px"}} className="gs_reveal">Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.</CustomText>
        </Benefits>
        <Benefits backgroundColor="#F8F8F8">
          <img src={Temperature} alt="Tempreture" loading="lazy" style={{maxWidth: "126px", maxHeight: "126px"}} className="gs_reveal"/>
          <CustomText align="left" color="#285A43" family="Lato" size="20px" weight="600" style={{marginLeft: "16px"}} className="gs_reveal">Work Smart</CustomText>
          <CustomText align="left" color="#121212"  style={{marginLeft: "16px"}} className="gs_reveal">We work smart, using innovative techniques and technology to streamline our processes</CustomText>
        </Benefits>
        <Benefits>
          <img src={Pruning} alt="Pruning" loading="lazy" style={{maxWidth: "126px", maxHeight: "126px"}} className="gs_reveal"/>
          <CustomText align="left" color="#285A43" family="Lato" size="20px" weight="600" style={{marginLeft: "16px"}} className="gs_reveal">Excelent Service</CustomText>
          <CustomText align="left" color="#121212"  style={{marginLeft: "16px"}} className="gs_reveal">We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs</CustomText>
        </Benefits>
      </Contnent>
    </Container>
  );
}

export default Benefit;
