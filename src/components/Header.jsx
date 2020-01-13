import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { appColor, backgroundColor, color } from "../views/styling";

export default function Header(props) {
  return (
    <StyledHeader>
      <Link to="/">
        <h3>James Grantham</h3>
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex
  justify-content: center
  h3 {
    margin-top: 20px
    padding: 5px
    background-color: ${backgroundColor}
    color: ${color}
    border-radius: 10px
    width: 300px
`