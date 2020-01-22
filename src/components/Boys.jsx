import React from "react";
import styled from "styled-components";

import { landingBoysBack, landingBoysButton } from "../views/styling";

export default function Boys() {
  return (
    <StyledBoys>
      <Content>
        <h3 style={hstyle}>... and dedicated Father of three awesome boys!</h3>
      </Content>
    </StyledBoys>
  );
}

const StyledBoys = styled.div`
  background-color: ${landingBoysBack}
  width: 100%
`;

const Content = styled.div`
  margin: 50px 20px 50px 20px
  background-color: ${landingBoysButton}
  border-radius: 120px
`;

const hstyle = {
  color: "white",
  fontWeight: "bold",
  padding: "100px 40px"
};