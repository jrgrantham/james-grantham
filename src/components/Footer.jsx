import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { blackOff } from "../views/styling";

export default function Footer(props) {
  return (
    <StyledFooter>
      <Link to="/" style={{ color: blackOff }} >
        Return to home page
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
a {
  display: block
  margin: 30px 0 50px 0
  padding: 0

  @media (min-width: 501px) {
    padding 20px
  }
}
`