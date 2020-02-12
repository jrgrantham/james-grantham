import React from "react";
import styled from "styled-components";

export default function Spacer(props) {
  return (
    <StyledSpacer>
      <div className='toggle darkmode' />
    </StyledSpacer>
  );
}

const StyledSpacer = styled.div`
  width: 100%;

  .toggle {
    background: rgb(0,0,0, 0.1);
    height: 5px;
  }

  .darkmode {
    background: rgb(255,255,255, 0.1);
  }
`;