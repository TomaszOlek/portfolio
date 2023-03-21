import React from "react";
import styled from "styled-components";
import { CustomText } from "../functions";

import Bamboo from "../assets/Bamboo.png";
import Outdoor_Plant from "../assets/Outdoor_Plant.png";
import Indoor_Plant from "../assets/Indoor_Plant.png";

const Container = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 94px;
`;

const Card = styled.div`
  width: 290px;
  height: 340px;

  display: flex;
  flex-direction: column;

  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.02);
  border-radius: 10px;
  padding: 20px 30px;

  &:nth-child(even) {
    background-color: #285a43;
  }
`;

function AboutUs() {
  return (
    <Container>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          gap: "75px",
        }}
      >
        <CustomText
          size="34px"
          font="Lato"
          weight="600"
          height="50px"
          color="#285A43"
          style={{ maxWidth: "480px" }}
          className="gs_reveal gs_reveal_fromLeft"
        >
          We Help choose the most suitable plants for you
        </CustomText>
        <CustomText
          align="left"
          color="#000"
          style={{ maxWidth: "650px" }}
          className="gs_reveal gs_reveal_fromRight"
        >
          Our selection includes a wide variety of flowers, from classic roses
          to exotic orchids, as well as a variety of lush indoor and outdoor
          plants and also offer unique floral arrangements that are perfect for
          any occasion, whether you're looking to brighten up your home or send
          a thoughtful gift.{" "}
        </CustomText>
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "80px",
        }}
      >
        <Card className="gs_reveal">
          <img
            src={Indoor_Plant}
            alt="indoor plant"
            loading="lazy"
            style={{ width: "126px", height: "126px" }}
          />
          <CustomText color="#285A43" margin="10px 0 26px 20px" align="left">
            Indoor Plants
          </CustomText>
          <CustomText
            color="#285A43"
            margin="10px 0 26px 20px"
            align="left"
            spacing="0"
            height="24px"
          >
            Bring the beauty of nature to your outdoor spaces with our wide
            selection of outdoor plants
          </CustomText>
        </Card>
        <Card className="gs_reveal">
          <img
            src={Outdoor_Plant}
            alt="outdoor plant"
            loading="lazy"
            style={{ width: "126px", height: "126px" }}
          />
          <CustomText margin="10px 0 26px 20px" align="left">
            Outdoor Plants
          </CustomText>
          <CustomText
            margin="10px 0 26px 20px"
            align="left"
            spacing="0"
            height="24px"
          >
            Bring a touch of greenery to your living spaces with our collection
            of indoor plants, perfect for purifying the air and adding a natural
            touch to your home.
          </CustomText>
        </Card>
        <Card className="gs_reveal">
          <img
            src={Bamboo}
            alt="bamboo plant"
            loading="lazy"
            style={{ width: "126px", height: "126px" }}
          />
          <CustomText color="#285A43" margin="10px 0 26px 20px" align="left">
            Plants Pots
          </CustomText>
          <CustomText
            color="#285A43"
            margin="10px 0 26px 20px"
            align="left"
            spacing="0"
            height="24px"
          >
            Add a touch of style to your indoor or outdoor spaces with our
            collection of pots plants, available in a variety of sizes and
            designs to fit any decor
          </CustomText>
        </Card>
      </div>
    </Container>
  );
}

export default AboutUs;
