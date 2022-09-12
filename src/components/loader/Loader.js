import React from 'react';
import styled from "styled-components";
import "./loader.css";

const DivContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DivChild = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${props => props.color};
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props => props.color} transparent transparent transparent; 
  `

const Loader = ( { colorPrimary}) => {
  return ( 
    <DivContainer >
      <DivChild color={colorPrimary}></DivChild>
      <DivChild color={colorPrimary}></DivChild>
      <DivChild color={colorPrimary}></DivChild>
      <DivChild color={colorPrimary}></DivChild>
    </DivContainer>
   );
}
 
export default Loader;