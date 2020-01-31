import React from "react";
import styled from "styled-components";

import { landingBoysBack, landingBoysButton, appWidth } from "../../views/styling";

export default function Boys() {
  return (
    <StyledBoys>
      <Content>
        <h3 style={hstyle}>... and dedicated Father to three awesome boys!</h3>
      </Content>
    </StyledBoys>
  );
}

const StyledBoys = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${landingBoysBack};
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  max-width: ${appWidth};
  margin: 50px 20px 50px 20px;
  background-color: ${landingBoysButton};
  border-radius: 120px;
`;

const hstyle = {
  color: "white",
  fontWeight: "bold",
  padding: "100px 40px"
};