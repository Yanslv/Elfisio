import styled from 'styled-components';


const colors = [
  {
    black:"#000",
    blue:"#00f",
    green:"#0f0",
    red: "#f00",
    white:"#fff",
    gray: "#7a7a7a"
  } 
]

const color = colors.map(item => {
  return item;
    }
  )


export const Container = styled.View`
  flex: 1;
  background: #d308;
  width: auto;
  height: auto;
`;

export const TextCustom = styled.Text`
    color: #696969;
    font-size: 24px;
    font-weight: 500;
`;



