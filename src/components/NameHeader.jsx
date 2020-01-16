import React from "react";
import styled from "styled-components";

import { backgroundColor, backgroundColorHover, accentColor, accentColorHover, transition, mediaBreak, borderRad } from "../views/styling";

export default function Header(props) {
  const { hidden, setHidden } = props;
  const contact = hidden ? "(contact)" : "hide menu...";

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
          <h5 href="https://github.com/jrgrantham">GitHub</h5>
        </StyledButton>
        <StyledMiddleButton>
          <h5>Contact me</h5>
        </StyledMiddleButton>
        <StyledButton>
          <h5 href="https://www.linkedin.com/in/j-grantham/">LinkedIn</h5>
        </StyledButton>
      </StyledHiddenDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  border-radius: ${borderRad}
`;

const StyledHeader = styled.div`
  // margin: 0.25rem 0
  padding: .5rem 0
  width: 300px
  background-color: ${backgroundColor}
  border-radius: ${borderRad}
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
  justify-content: space-between
  align-items: flex-end
  height: 0px;
  width: 100%
  overflow: hidden;
  transition: height ${transition}

  @media (min-width: ${mediaBreak}) {
    width: 100%
  }
  `;
  
  const openDiv = {
    height: "60px",
    // border: '1px solid red'
};

const StyledButton = styled.div`
  margin: 0.25rem 0rem
  padding: 10px 0
  background-color: ${accentColor}
  border-radius: ${borderRad}
  cursor: pointer
  width: 30%

  @media (pointer:fine) {
    &:hover {
      background-color: ${accentColorHover};
      transition: background-color ${transition}
    }
  }
`;

const StyledMiddleButton = styled.div`
  margin: 0.25rem 0rem
  padding: 10px 0
  background-color: ${accentColor}
  border-radius: ${borderRad}
  cursor: pointer
  width: 38%

  @media (pointer:fine) {
    &:hover {
      background-color: ${accentColorHover};
      transition: background-color ${transition}
    }
  }
`;