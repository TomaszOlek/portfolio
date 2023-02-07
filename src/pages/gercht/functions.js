import styled from 'styled-components';

export const CustomText = styled.p`
  font-weight: ${props => props.weight ?  props.weight : 400};
  font-size: ${props => props.size ?  props.size : "16px"};
  line-height: ${props => props.height ?  props.height : "28px"};
  letter-spacing: ${props => props.spacing ?  props.spacing : "0.04em"};
  color: ${props => props.color ?  props.color : "#FFFFFF"};
  text-align: ${props => props.align ?  props.align : "left"};
  font-family: ${props => props.family ?  props.family : "Cormorant Upright"};
  margin : ${props => props.margin ?  props.margin : "0"};
`
export const Paragraf = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.04em;
  color: ${props => props.color ?  props.color : "#AAAAAA"};
  text-align: ${props => props.align ?  props.align : "left"};
  font-family: ${props => props.family ?  props.family : "'Open Sans', sans-serif"};
  margin : ${props => props.margin ?  props.margin : "0"};
`;
export const Header1 = styled.h1`
  line-height: 30px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #DCCA87;
  font-family: ${props => props.family ?  props.family : "Cormorant Upright"};
  text-align: ${props => props.align ?  props.align : "left"};
  font-size: ${props => props.size ?  props.size : "64px"};
  margin : ${props => props.margin ?  props.margin : "30px 0px"};
`;
export const Header2 = styled.h2`
  line-height: 30px;
  letter-spacing: 0.04em;
  color: ${props => props.color ?  props.color : "#FFFFFF"};
  text-align: ${props => props.align ?  props.align : "left"};
  font-family: ${props => props.family ?  props.family : "Cormorant Upright"};
  margin : ${props => props.margin ?  props.margin : "8px 0"};
`;
export const Header3 = styled.h2`
  line-height: 30px;
  letter-spacing: 0.04em;
  color: ${props => props.color ?  props.color : "#F5EFDB"};
  text-align: ${props => props.align ?  props.align : "left"};
  font-family: ${props => props.family ?  props.family : "Cormorant Upright"};
  font-size: ${props => props.size ?  props.size : "32px"};
  margin : ${props => props.margin ?  props.margin : "30px 0"};
`;
export const Button = styled.button`
  width: ${props => props.width ?  props.width : "136px"};
  height: ${props => props.height ?  props.height : "44px"};

  font-family: 'Cormorant Upright';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  color: #0C0B08;
  background: #DCCA87;
  border: 1px solid #DCCA87;
`;
