import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { appColor, backgroundColor, color, transition } from "../views/styling";

export default function NameHeader() {
  return (
    <StyledHeader>
      <Link to="/">
        <h4>James Grantham</h4>
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex
  justify-content: center

  h4 {
    margin-top: 20px
    padding: 5px
    background-color: ${backgroundColor}
    color: ${color}
    border-radius: 10px
    width: 300px

    @media (pointer:fine) {
      &:hover {
        color: ${appColor};
        background-color: ${color};
        transition: background-color ${transition}
      }
    }
`;
