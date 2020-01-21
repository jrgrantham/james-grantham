import React from "react";
import styled from "styled-components";

import { orangeMedium } from "../views/styling";

export default function Boys() {
  return (
    <StyledBoys>
      <Content>
        <h2 style={hstyle}>... and dedicated Father of three awesome boys!</h2>
      </Content>
    </StyledBoys>
  );
}

const StyledBoys = styled.div`
  background-color: ${orangeMedium}
  width: 100%
`;

const Content = styled.div`
  margin: 0 20px 50px 20px
  background-color: green
  border-radius: 120px
`;

const hstyle = {
  color: "white",
  fontWeight: "bold",
  padding: "100px 40px"
};