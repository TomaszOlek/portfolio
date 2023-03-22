import React from "react";
import styled from "styled-components";

import BackgroundImage from "../assets/BackgroundImage.png";
import SpoonRight from "../assets/SpoonRight.png";
import Ramen from "../assets/Ramen.png";
import Drinks from "../assets/Drinks.png";
import Egg from "../assets/Egg.png";
import Soup from "../assets/Soup.png";
import BlackberryDrink from "../assets/BlackberryDrink.png";

import { Paragraf, Header1, Header2, Button } from "../functions";

const Container = styled.div`
  width: 100vw;
  height: 520px;
  background: url(${BackgroundImage});
  box-shadow: inset 0 0 0 1000px rgba(4, 4, 4, 0.5);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;
const Gallery = styled.div`
  width: 300px;
  height: 630px;

  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  margin-left: 180px;

  transform: rotate(-90deg);
  overflow-y: auto;
  overflow-x: hidden;
`;
const GalleryItem = styled.div`
  width: 192px;
  height: 200px;
  align-self: center;

  transform: rotate(90deg);
`;
const GalleryText = styled.div`
  width: 491px;
  height: 300px;

  display: flex;
  flex-direction: column;
`;

function PhotoGallery() {
  return (
    <Container id="blog">
      <GalleryText className="gs_reveal gs_reveal_fromLeft">
        <Header2>Instagram</Header2>
        <img
          src={SpoonRight}
          alt="SpoonRight"
          loading="lazy"
          style={{ width: "40px" }}
        />
        <Header1>Photo Gallery</Header1>
        <Paragraf margin="15px 0 10px 0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </Paragraf>
        <Button style={{ margin: "20px 0 0 0" }}>View More</Button>
      </GalleryText>
      <Gallery>
        <GalleryItem>
          <img
            src={Ramen}
            alt="Ramen"
            loading="lazy"
            style={{ width: "192px", alignSelf: "center" }}
          />
        </GalleryItem>
        <GalleryItem>
          <img
            src={Drinks}
            alt="Drinks"
            loading="lazy"
            style={{ width: "192px", alignSelf: "center" }}
          />
        </GalleryItem>
        <GalleryItem>
          <img
            src={Egg}
            alt="Egg"
            loading="lazy"
            style={{ width: "192px", alignSelf: "center" }}
          />
        </GalleryItem>
        <GalleryItem>
          <img
            src={Soup}
            alt="Soup"
            loading="lazy"
            style={{ width: "192px", alignSelf: "center" }}
          />
        </GalleryItem>
        <GalleryItem>
          <img
            src={BlackberryDrink}
            alt="BlackberryDrink"
            loading="lazy"
            style={{ width: "192px", alignSelf: "center" }}
          />
        </GalleryItem>
      </Gallery>
    </Container>
  );
}

export default PhotoGallery;
