import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { transition, borderRad, buttonOrange, fontColourDarkMode, professionalButtonDark } from "../../views/styling";

export function LinkButton(props) {
  return <LinButton to={props.target}>{props.content}</LinButton>;
}

const LinButton = styled(Link)`
  color: ${fontColourDarkMode};
  font-weight: bold;
  background-color: ${buttonOrange};
  padding: 1rem 3.6rem;
  border-radius: ${borderRad};
  transition: opacity ${transition};

  @media (pointer: fine) {
    &:hover {
      opacity: 0.75;
    }
  }
`;

export function AnchorButton(props) {
  return <AncButton href={props.target}>{props.content}</AncButton>;
}

const AncButton = styled.a`
  display: block;
  color: ${fontColourDarkMode};
  font-weight: bold;
  background-color: ${buttonOrange};
  padding: 1rem 3.6rem;
  border-radius: ${borderRad};
  transition: opacity ${transition};

  @media (pointer: fine) {
    &:hover {
      opacity: 0.75;
    }
  }
`;

export function SmallAnchorButton(props) {
  return <SmallAncButton href={props.target}>{props.content}</SmallAncButton>;
}

const SmallAncButton = styled(AncButton)`
  padding: 0.6rem 1.6rem;
  background: ${professionalButtonDark};
`;