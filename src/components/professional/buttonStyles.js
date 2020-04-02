import React from "react";

import styled from "styled-components";
import arrowUp from "../../../src/images/arrowUp.png";
import arrowDown from "../../../src/images/arrowDown.png";
import menu from "../../../src/images/menu.png";

export function MenuArrow(props) {
  const StyledArrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 27px;

    img {
      opacity: 1;
      height: 25px;
    }
  `;

  return (
    <StyledArrow>
      <img src={props.hidden ? arrowDown : arrowUp} alt="" />
    </StyledArrow>
  );
}

export function MenuBurger(props) {
  const StyledHamburger = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 30px;
    width: 30px;
  
    img {
      opacity: 0.8;
      height: 25px;
    }
  `;

  return (
    <StyledHamburger>
      <img src={props.hidden ? menu : null} alt="" />
    </StyledHamburger>
  );
}
