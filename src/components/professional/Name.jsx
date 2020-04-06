import React from "react";
import styled from "styled-components";

import useDarkMode from "../../hooks/useDarkMode";
import { Link } from "react-router-dom";

import arrow from "../../images/backArrow.png";
import { transition, mediaBreak, professionalColor } from "../../views/styling";

export default function Name() {
  useDarkMode();

  return (
    <StlyedLink className="toggle darkmode name" to="/">
      <div className="container arrow">
        <img src={arrow} alt="back" />
      </div>
      <h2 className="toggle darkmode">James Grantham</h2>
      <div className="container"></div>
    </StlyedLink>
  );
}

const StlyedLink = styled(Link)`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  width: 100%;

  @media (max-width: ${mediaBreak}) {
    justify-content: center;
  }

  h2 {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    cursor: pointer;
    transition: color ${transition};

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

  .arrow {
    display: flex;
    background: ${professionalColor};
    border-radius: 35%;
    padding: 10px;
    transition: all ${transition};

    @media (pointer: fine) {
      &:hover {
        transform: scale(1.3);
      }
    }

    @media (max-width: ${mediaBreak}) {
      display: none;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`