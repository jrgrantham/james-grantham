import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { borderRad } from "../../views/styling";

export default function Footer() {
  return (
    <StyledFooter>
      <Link to="/" >
        Return to home page
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
a {
  color: white;
  font-weight: bold;
  background: dodgerblue;
  display: block;
  margin: 30px 0 50px 0;
  padding: 0.6rem 1.6rem;
  border-radius: ${borderRad}


}
`