import React from "react";
import styled from "styled-components";
import { borderRad } from "../../views/styling";

export default function Footer() {
  return (
    <StyledFooter>
      <a href='/'>Return to home page</a>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  margin-top: 30px;

  a {
    color: white;
    font-weight: bold;
    background: dodgerblue;
    display: block;
    margin: 0px 0 60px 0;
    padding: 0.6rem 1.6rem;
    border-radius: ${borderRad}
  }
`