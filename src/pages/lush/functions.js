import styled from 'styled-components';

export const CustomText = styled.p`
  font-weight: ${props => props.weight ?  props.weight : 400};
  font-size: ${props => props.size ?  props.size : "16px"};
  line-height: ${props => props.height ?  props.height : "28px"};
  letter-spacing: ${props => props.spacing ?  props.spacing : "0.04em"};
  color: ${props => props.color ?  props.color : "#FFFFFF"};
  text-align: ${props => props.align ?  props.align : "center"};
  font-family: ${props => props.family ?  props.family : "'Poppins', sans-serif"};
  margin : ${props => props.margin ?  props.margin : "0"};
`

export const Button = styled.button`
  width: ${props => props.width ?  props.width : "136px"};
  height: ${props => props.height ?  props.height : "44px"};

  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;

  border-radius: 3px;
  color: #fff;
  background: ${props => props.fill ?  "#285A43" : "transparent"};
  border: 1px solid ${props => props.fill ?  "#285A43" : "#fff"};
`;
