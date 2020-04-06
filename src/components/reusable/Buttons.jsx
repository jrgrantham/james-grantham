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
  0%   { transform: scale(1,1) }
  20%  { transform: scale(0.9,1) }
  70%  { transform: scale(1.1,1.1) }
  100%  { transform: scale(1,1) }
`;

export function LinkButton(props) {
  const LinButton = styled(Link)`
    color: ${fontColourDarkMode};
    font-weight: bold;
    background-color: ${props.color ? props.color : buttonOrange};
    padding: 1rem 3.6rem;
    border-radius: ${borderRad};
    transition: opacity ${transition};
    margin: ${props.margin ? props.margin : 0};
    margin: 30px 0 60px 0;
    animation-duration: ${2}s;

    @media (pointer: fine) {
      &:hover {
        animation-name: ${move};
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
    border-radius: ${borderRad};
    transition: opacity ${transition};
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