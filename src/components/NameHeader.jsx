import React from "react";
import styled from "styled-components";

import { appColor, appColorHover, backgroundColor, backgroundColorHover, color, colorHover, accentColor, accentColorHover, transition } from "../views/styling";

export default function Header(props) {
  const { hidden, setHidden } = props;
  const contact = hidden ? "contact..." : "hide menu...";

  return (
    <Container>
      <StyledHeader
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <h4>James Grantham</h4>
        {contact}
      </StyledHeader>
      <StyledHiddenDiv style={hidden ? null : openDiv}>
        <StyledButton>
          <a href="https://github.com/jrgrantham">GitHub</a>
        </StyledButton>
        <StyledButton>
          <h5>e-mail</h5>
        </StyledButton>
        <StyledButton>
          <a href="https://www.linkedin.com/in/j-grantham/">LinkedIn</a>
        </StyledButton>
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

const StyledHeader = styled.div`
  // margin: 0.25rem 0
  padding: .5rem 0
  width: 300px
  background-color: ${backgroundColor}
  border-radius: 10px
  cursor: pointer

  @media (pointer:fine) {
    &:hover {
      background-color: ${backgroundColorHover};
      transition: background-color ${transition}
    }
  }
`;

const StyledHiddenDiv = styled.div`
  display: flex
  flex-direction: columm
  justify-content: space-evenly
  align-items: center
  background-color: blue
  height: 0px;
  width: 80%
  max-width: 700px
  overflow: hidden;

  transition height ${transition}
  `;

const openDiv = {
  height: "80px",
  borderRadius: "10px"
};

const StyledButton = styled.div`
  margin: 0.25rem 0rem
  padding: 10px 0
  background-color: ${backgroundColor}
  border-radius: 10px
  cursor: pointer
  width: 100%

  // border: 1px solid red
  
  @media (pointer:fine) {
    &:hover {
      background-color: ${backgroundColorHover};
      transition: background-color ${transition}
    }
  }

  @media (min-width: 650px) {
    width: 150px
  }
`;