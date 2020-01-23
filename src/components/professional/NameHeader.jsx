import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import arrowUp from "../../../src/images/arrowUp.png";
import arrowDown from "../../../src/images/arrowDown.png";
import { StyledArrow } from "./buttonStyles";

import {
  professionalBack,
  professionalButtonHov,
  professionalLinks,
  transition,
  mediaBreak,
  borderRad
} from "../../views/styling";

export default function Header(props) {
  const { hidden, setHidden } = props;

  return (
    <Container>
      <StyledHeader
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <StyledArrow>
          <img src={hidden ? arrowDown : arrowUp} alt="" />
        </StyledArrow>
        <h4>James Grantham</h4>
        <StyledArrow>
          <img src={hidden ? arrowDown : arrowUp} alt="" />
        </StyledArrow>
      </StyledHeader>
      <StyledHiddenDiv style={!hidden ? null : openDiv}>
        <a style={styledButton} href="https://github.com/jrgrantham">
          GitHub
        </a>
        <Link style={styledButton} to="contact">
          <h5>contact me</h5>
        </Link>
        <a style={styledButton} href="https://www.linkedin.com/in/j-grantham/">
          LinkedIn
        </a>
      </StyledHiddenDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${borderRad};
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem 0;
  width: 300px;
  background-color: ${professionalBack};
  border-radius: ${borderRad};
  cursor: pointer;

  @media (pointer: fine) {
    &:hover {
      background-color: ${professionalButtonHov};
      transition: background-color ${transition};
    }
  }
`;

const StyledHiddenDiv = styled.div`
  display: flex;
  flex-direction: columm;
  justify-content: space-between;
  align-items: flex-end;
  height: 0px;
  width: 100%;
  overflow: hidden;
  transition: height ${transition};

  @media (min-width: ${mediaBreak}) {
    width: 100%;
  }
`;

const openDiv = {
  height: "55px"
};

const styledButton = {
  minWidth: "30%",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.2rem",
  display: "block",
  padding: "10px 10px",
  backgroundColor: professionalLinks,
  borderRadius: borderRad

  // @media (pointer:fine) {
  //   &:hover {
  //     background-color: ${professionalButtonHov},
  //     transition: background-color ${transition},
  //   }
  // }
};

const StyledLinkButton = styled.div`
  min-width: 30%;

  a {
    @media (pointer: fine) {
      &:hover {
        background-color: ${professionalButtonHov};
        transition: background-color ${transition};
      }
    }
  }
`;
