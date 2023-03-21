import React from "react";
import styled from "styled-components";
import { CustomText } from "../functions";

import Blog1 from "../assets/Blog1.png";
import Blog2 from "../assets/Blog2.png";
import Blog3 from "../assets/Blog3.png";
import Calendar from "../assets/Calendar.png";
import Arrow from "../assets/Arrow.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

function Blog() {
  return (
    <Container>
      <CustomText
        color="#285A43"
        size="36px"
        weight="600"
        className="gs_reveal"
      >
        Interesting blog to read
      </CustomText>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "70px",
        }}
      >
        <div
          style={{
            width: "360px",
            height: "535px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="gs_reveal"
        >
          <img src={Blog1} alt="Blog 1" loading="lazy" />
          <CustomText
            color="#285A43"
            size="19px"
            weight="900"
            align="left"
            spacing="0"
          >
            More productive with an atmosphere of greenery
          </CustomText>
          <CustomText color="#121212" align="left" margin="5px 0 0 0">
            An atmosphere of greenery can increase productivity in the
            workplace. Studies show that plants improve air quality and decrease
            stress...
          </CustomText>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={Calendar} alt="Calendar" loading="lazy" />
              <CustomText color="rgba(18, 18, 18, 0.8)">
                January 20, 2023
              </CustomText>
            </div>
            <button
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <CustomText color="#285A43" weight="900">
                Read More
              </CustomText>
              <img src={Arrow} alt="Arrow" loading="lazy" />
            </button>
          </div>
        </div>
        <div
          style={{
            width: "360px",
            height: "535px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="gs_reveal"
        >
          <img src={Blog2} alt="Blog 2" loading="lazy" />
          <CustomText
            color="#285A43"
            size="19px"
            weight="900"
            align="left"
            spacing="0"
          >
            The benefits of plants in your room
          </CustomText>
          <CustomText color="#121212" align="left" margin="5px 0 0 0">
            Plants in your room can bring numerous benefits, such as improved
            air quality, reduced stress, and increased feelings of
            well-being....
          </CustomText>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={Calendar} alt="Calendar" loading="lazy" />
              <CustomText color="rgba(18, 18, 18, 0.8)">
                January 10, 2023
              </CustomText>
            </div>
            <button
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <CustomText color="#285A43" weight="900">
                Read More
              </CustomText>
              <img src={Arrow} alt="Arrow" loading="lazy" />
            </button>
          </div>
        </div>
        <div
          style={{
            width: "360px",
            height: "535px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="gs_reveal"
        >
          <img src={Blog3} alt="Blog 3" loading="lazy" />
          <CustomText
            color="#285A43"
            size="19px"
            weight="900"
            align="left"
            spacing="0"
          >
            Hobbyist plants in the house
          </CustomText>
          <CustomText color="#121212" align="left" margin="5px 0 0 0">
            Having hobbyist plants in the house is a great way to bring nature
            indoors. Not only do they purify the air, but they....
          </CustomText>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={Calendar} alt="Calendar" loading="lazy" />
              <CustomText color="rgba(18, 18, 18, 0.8)">
                January 15, 2023
              </CustomText>
            </div>
            <button
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <CustomText color="#285A43" weight="900">
                Read More
              </CustomText>
              <img src={Arrow} alt="Arrow" loading="lazy" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Blog;
