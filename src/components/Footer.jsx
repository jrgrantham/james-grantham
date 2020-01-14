import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../views/styling";

export default function Footer(props) {
  return (
    <StyledFooter>
      <Link to="/" style={{ color: color }} >
        Return to home page
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
a {
  display: block
  margin: 25px 0 50px 0
  padding: 20px
}
`