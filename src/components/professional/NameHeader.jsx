import React from "react";
import { Link } from "react-router-dom";

import { MenuArrow } from "./buttonStyles";
import {
  Container,
  StyledHeader,
  StyledHiddenDiv,
  openDiv,
  styledButton
} from "./nameHeaderStyle";

export default function Header(props) {
  const { hidden, setHidden } = props;
  function changeHidden() {
    setHidden(!hidden);
  }

  return (
    <>
      <StyledHeader onClick={() => changeHidden()}>
        <MenuArrow hidden={hidden} />
        <h4>James Grantham</h4>
        <MenuArrow hidden={hidden} />
      </StyledHeader>
      <StyledHiddenDiv style={hidden ? null : openDiv}>
        <a
          href="https://github.com/jrgrantham"
          style={styledButton}
          className="hover"
        >
          GitHub
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
    </>
  );
}
