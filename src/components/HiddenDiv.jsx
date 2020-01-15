import React from "react";
import styled from "styled-components";

import { transition, appColor, backgroundColor, color } from "../views/styling";

export default function HiddenDiv(props) {
  const { hidden, setHidden } = props;
  const contact = hidden ? "contact..." : "hide email form..."

  return (
    <Container>
      <StyledButton
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <h4>James Grantham</h4>
        {contact}
      </StyledButton>
      <StyledHiddenDiv style={hidden ? null : openDiv}>
        <h3>
          email form goes here
        </h3>
      </StyledHiddenDiv>
    </Container>
  );
}

const Container = styled.div`
display: flex
flex-direction: column
align-items: center
border-radius: 10px
`;

const StyledHiddenDiv = styled.div`
  display: flex
  flex-direction: columm
  justify-content: center
  align-items: center
  background-color: ${backgroundColor}
  background-color: red
  // margin-top: 10px
  height: 0px;
  width: 90%
  max-width: 700px
  overflow: hidden;

  transition height 1s
  `;

const openDiv = {
  height: "100px",
  "border-radius": "10px"
};

const StyledButton = styled.div`
  margin: 0.25rem 0
  padding: .5rem 0
  width: 300px
  background-color: ${backgroundColor}
  border-radius: 10px
  cursor: pointer

  @media (pointer:fine) {
    &:hover {
      color: ${appColor};
      h4 {
        color: ${appColor}
      }
      background-color: ${color};
      transition: background-color ${transition}s ease-in-out
    }
  }
`;
