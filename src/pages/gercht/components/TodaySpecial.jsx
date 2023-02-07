import React from "react";
import styled from 'styled-components';

import SpoonRight from "../assets/SpoonRight.png";
import Cocktail from "../assets/Cocktail.png";

import { CustomText, Paragraf, Header1, Header2, Button } from "../functions";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0C0B08;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Contnet = styled.div`
  width: 412px;
  height: 596px;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 40px;
`;
const SpecialItem = styled.div`
  min-width: 412px;
  height: 66px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function TodaySpecial() {
  const Items = {
    wineBeers :[
      {
        name: "Chapel Hill Shiraz",
        price: "$56",
        moreInfo: "AU | Bottle",
      },
      {
        name: "Catena Malbec",
        price: "$59",
        moreInfo: "AR | Bottle",
      },
      {
        name: "La Vieille Rosé",
        price: "$44",
        moreInfo: "FR | 750 ml",
      },
      {
        name: "Rhino Pale Ale",
        price: "$31",
        moreInfo: "CA | 750 ml",
      },
      {
        name: "Irish Guinness",
        price: "$26",
        moreInfo: "IE | 750 ml",
      },
    ],
    cocktails: [
      {
        name: "Aperol Spritz",
        price: "$20",
        moreInfo: "Aperol | Villa Marchesi prosecco | soda | 30ml",
      },
      {
        name: "Dark 'N' Stormy",
        price: "$16",
        moreInfo: "Dark rum | Ginger beer | Slice of lime. ",
      },
      {
        name: "Daiquiri",
        price: "$10",
        moreInfo: "Rum | Citrus juice | Sugar",
      },
      {
        name: "Old Fashioned",
        price: "$31",
        moreInfo: "Bourbon | Brown sugar | Angostura Bitters",
      },
      {
        name: "Negroni",
        price: "$26",
        moreInfo: "Gin | Sweet Vermouth | Campari | Orange garnish",
      },
    ]
  };

  return (
    <Container id="specials">
      <TextHeader className="gs_reveal">
        <Header2 style={{textTransform: "capitalize"}}>Menu that fits you palatte</Header2>
        <img src={SpoonRight} alt="SpoonRight"/>
        <Header1>Today’s Special</Header1>
      </TextHeader>

      <div style={{ display: "flex", flexDirection: "row", gap:"50px"}}>
        <Contnet className="gs_reveal gs_reveal_fromLeft">
          <CustomText weight="600" size="45px">Wine & Beer</CustomText>
          {
            Items.wineBeers.map((item)=>(
              <SpecialItem>
              <div style={{ display:"flex", flexDirection:"row", alignItems: "center", justifyContent: "center", gap:"32px", width:"100%"}}>
                <Header2 color="#DCCA87" margin="0" style={{marginRight:"auto"}}>{item.name}</Header2>
                <hr style={{width:"119px", margin:"0"}}/>
                <Header2 margin="0" style={{fontFeatureSettings: "'tnum' on, 'lnum' on"}}>{item.price}</Header2>
              </div>
              <Paragraf style={{marginRight:"auto"}}>{item.moreInfo}</Paragraf>
            </SpecialItem>
            ))
          }

        </Contnet>
        <div style={{ 
          width:"385px", 
          height: "616.75px",
          backgroundImage:`url(${Cocktail})`, 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "contain",
          boxShadow: "5px 5px 10px 20px #0C0B08 inset"
        }} className="gs_reveal"/>
        <Contnet className="gs_reveal gs_reveal_fromRight">
          <CustomText weight="600" size="45px">Cocktails</CustomText>
          {
            Items.cocktails.map((item)=>(
              <SpecialItem>
              <div style={{ display:"flex", flexDirection:"row", alignItems: "center", justifyContent: "center", gap:"32px", width:"100%"}}>
                <Header2 color="#DCCA87" margin="0" style={{marginRight:"auto"}}>{item.name}</Header2>
                <hr style={{width:"119px", margin:"0"}}/>
                <Header2 margin="0" style={{fontFeatureSettings: "'tnum' on, 'lnum' on"}}>{item.price}</Header2>
              </div>
              <Paragraf style={{marginRight:"auto"}}>{item.moreInfo}</Paragraf>
            </SpecialItem>
            ))
          }

        </Contnet>
      </div>

      <Button style={{marginTop:"30px"}}>View More</Button>

    </Container>
  );
}
  
export default TodaySpecial;