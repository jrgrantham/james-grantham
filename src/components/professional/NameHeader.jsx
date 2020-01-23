import React from "react";
import { Link } from "react-router-dom";

import arrowUp from "../../../src/images/arrowUp.png";
import arrowDown from "../../../src/images/arrowDown.png";
import { StyledArrow } from "./buttonStyles";

import { Container, StyledHeader, StyledHiddenDiv, openDiv, styledButton } from "./nameHeaderStyle";

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
        <a
          href="https://github.com/jrgrantham"
          style={styledButton}
        >
          <div className="hover">
            GitHub
          </div>
        </a>
        <Link to="contact" style={styledButton} className="hover">
          <h5>contact me</h5>
        </Link>
        <a
          href="https://www.linkedin.com/in/j-grantham/"
          style={styledButton}
          className="hover"
        >
          LinkedIn
        </a>
      </StyledHiddenDiv>
    </Container>
  );
}


