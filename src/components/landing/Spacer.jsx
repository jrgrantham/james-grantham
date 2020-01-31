import React from "react";
import styled from "styled-components";

export default function Spacer(props) {
  return (
    <StyledSpacer />
  );
}

const StyledSpacer = styled.div`
  background: rgb(0,0,0, 0.08);
  height: 3px;
  width: 100%;
  bottom: 0;
`;