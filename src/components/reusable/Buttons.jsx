import React from "react";
import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";

import {
  transition,
  borderRad,
  buttonOrange,
  fontColourDarkMode,
} from "../../views/styling";

const move = keyframes`
0%   { transform: scale(1,1)      translateY(0); }
10%  { transform: scale(1.1,.9)   translateY(0); }
30%  { transform: scale(.9,1.1)   translateY(5px); }
50%  { transform: scale(1.05,.95) translateY(0); }
57%  { transform: scale(1,1)      translateY(-1px); }
64%  { transform: scale(1,1)      translateY(0); }
100% { transform: scale(1,1)      translateY(0); }
`;

export function LinkButton(props) {
  const LinButton = styled(Link)`
    color: ${fontColourDarkMode};
    font-weight: bold;
    background-color: ${props.color ? props.color : buttonOrange};
    padding: 1rem 3.6rem;
    border-radius: ${borderRad}px;
    transition: all ${transition}s;
    margin: ${props.margin ? props.margin : 0};
    margin: 30px 0 60px 0;
    animation-duration: ${2}s;
    
    @media (pointer: fine) {
      &:hover {
        transform: scale(1.3);
        border-radius: ${borderRad * 4}px
      }
    }
  `;
  return <LinButton to={props.target}>{props.content}</LinButton>;
}

export function AnchorButton(props) {
  const AncButton = styled.a`
    display: block;
    color: ${fontColourDarkMode};
    font-weight: bold;
    background-color: ${props.color ? props.color : buttonOrange};
    padding: 1rem 3.6rem;
    border-radius: ${borderRad}px;
    transition: opacity ${transition}s;
    margin: ${props.margin ? props.margin : 0};

    @media (pointer: fine) {
      &:hover {
        opacity: 0.75;
      }
    }
  `;

  return (
    <AncButton href={props.target} color={props.color}>
      {props.content}{" "}
    </AncButton>
  );
}