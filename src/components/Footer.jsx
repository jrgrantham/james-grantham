import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { appColor, backgroundColor, color } from "../views/styling";

export default function Footer(props) {
  return (
    <StyledFooter>
      <Link to="/" style={{ color: color, "fontSize": "1.2rem" }} >
        Return to home page
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
a {
  height: 100px
  padding: 30px
  margin-top: 15px;
}
`