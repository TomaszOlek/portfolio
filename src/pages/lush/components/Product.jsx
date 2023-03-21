import React from "react";
import styled from "styled-components";
import { CustomText, Button } from "../functions";

import Cactus from "../assets/Cactus.png";
import Cactus2 from "../assets/Cactus2.png";
import Cactus3 from "../assets/Cactus3.png";
import Cactus4 from "../assets/Cactus4.png";
import Cactus5 from "../assets/Cactus5.png";
import Cactus6 from "../assets/Cactus6.png";
import Cactus7 from "../assets/Cactus7.png";
import Cactus8 from "../assets/Cactus8.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  height: 62px;
  width: 278px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.02);
`;

const BuyNowButton = styled(Button)`
  border-color: #337a5b;
  color: #337a5b;
  &:hover {
    background-color: #337a5b;
    color: #fff;
  }
`;

function Product() {
  const item = {
    cactusys: [
      {
        Name: "Cactus Plant",
        Price: "$10",
        Discount: "$8",
        Image: Cactus,
      },
      {
        Name: "Cactus Plant",
        Price: "$10",
        Discount: "$8",
        Image: Cactus2,
      },
      {
        Name: "Cactus Plant",
        Price: "$10",
        Discount: "$8",
        Image: Cactus3,
      },
      {
        Name: "Cactus Plant",
        Price: "$10",
        Discount: "$8",
        Image: Cactus4,
      },
      {
        Name: "Cactus Plant",
        Price: "$10",
        Discount: "$8",
        Image: Cactus5,
      },
      {
        Name: "Cactus Plant",
        Price: "$10",
        Discount: "$8",
        Image: Cactus6,
      },
      {
        Name: "Cactus Plant",
        Price: "$10",
        Discount: "$8",
        Image: Cactus7,
      },
      {
        Name: "Cactus Plant",
        Price: "$10",
        Discount: "$8",
        Image: Cactus8,
      },
    ],
  };

  return (
    <Container>
      <CustomText
        color="#285A43"
        size="36px"
        weight="600"
        margin="0 0 55px 0"
        className="gs_reveal"
      >
        What We Offer To You
      </CustomText>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "1201px",
          flexWrap: "wrap",
          gap: "27px",
        }}
      >
        {item.cactusys.map((item, index) => (
          <div
            style={{
              width: "280px",
              height: "314px",
              display: "flex",
              flexDirection: "column",
            }}
            className="gs_reveal"
            key={index}
          >
            <img src={item.Image} alt={item.Name} loading="lazy" />
            <Content>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CustomText
                  color="#337A5B"
                  weight="900"
                  style={{ height: "22px" }}
                >
                  {item.Name}
                </CustomText>
                <CustomText
                  color="#337A5B"
                  size="12px"
                  style={{ height: "17px" }}
                  margin="0 0 5px 0"
                >
                  {item.Discount ? (
                    <>
                      <span style={{ color: "#3c3c3c" }}>({item.Price})</span>{" "}
                      {item.Discount}
                    </>
                  ) : (
                    <>{item.Discount}</>
                  )}{" "}
                </CustomText>
              </div>
              <BuyNowButton width="98px" height="33px">
                Buy Now
              </BuyNowButton>
            </Content>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Product;
