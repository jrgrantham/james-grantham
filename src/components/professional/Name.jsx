import React from "react";
import styled, { keyframes } from "styled-components";

import useDarkMode from "../../hooks/useDarkMode";
import { Link } from "react-router-dom";

import arrow from "../../images/backArrow.png";
import { transition, mediaBreak, professionalColor } from "../../views/styling";

export default function Name() {
  useDarkMode();

  return (
    <StlyedLink className="toggle darkmode name" to="/">
      <StyledAnimation className="container">
        <img src={arrow} alt="back" />
      </StyledAnimation>
      {/* <div className="container arrow">
        <img src={arrow} alt="back" />
      </div> */}
      <h2 id='scrollpadding' className="toggle darkmode">James Grantham</h2>
      <div className="container"></div>
    </StlyedLink>
  );
}

// Create the keyframes
const move = keyframes`
  0%   { transform: scale(1,1)      translateX(0); }
  10%  { transform: scale(0.9,1.1)   translateX(0); }
  30%  { transform: scale(1.1,0.9)   translateX(50px); }
  50%  { transform: scale(0.95,1.05) translateX(0); }
  57%  { transform: scale(1,1)      translateX(5px); }
  64%  { transform: scale(1,1)      translateX(0); }
  100% { transform: scale(1,1)      translateX(0); }
`;

// create a component that will move everything we pass in
const StyledAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${professionalColor};
  border-radius: 35%;
  padding: 10px;
  transition: all ${transition};
  animation-timing-function: bounce;
  animation-duration: ${2}s;
  // animation-iteration-count: infinite;

  @media (max-width: ${mediaBreak}) {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (pointer: fine) {
    &:hover {
      animation-name: ${move};
    }
  }
`;

const StlyedLink = styled(Link)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0px 20px 0 20px;
  width: 100%;

  @media (max-width: ${mediaBreak}) {
    justify-content: center;
  }

  h2 {
    margin: 15px 0px 5px 0px;
    padding: 2rem 0 2rem 0; // this is removed on-scroll
    cursor: pointer;
    transition: all ${transition};

    @media (pointer: fine) {
      &:hover {
      color: ${professionalColor};
      }
    }
  }

  .container {
    width: 50px;
    height: 50px;

    @media (max-width: ${mediaBreak}) {
      display: none;
    }
  }
`;
