import React from "react";
import styled from "styled-components";

import { landingBoysBack, landingBoysButton, appWidth, landingBoysFont } from "../../views/styling";

export default function Boys() {
  return (
    <StyledBoys>
      <Content>
        <h5 style={hstyle}>...and dedicated father to three awesome boys!</h5>
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
  margin: 20px 20px;
  background-color: ${landingBoysButton};
  border-radius: 120px;
`;

const hstyle = {
  color: landingBoysFont,
  fontWeight: "bold",
  padding: "20px 30px"
};