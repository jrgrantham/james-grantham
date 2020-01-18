import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import arrowUp from "../../src/images/arrowUp.png";
import arrowDown from "../../src/images/arrowDown.png";

import {
  greyLight,
  orangeMedium,
  transition,
  mediaBreak,
  borderRad
} from "../views/styling";

export default function Header(props) {
  const { hidden, setHidden } = props;

  return (
    <Container>
      <StyledHeader
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <StyledTitle>
          <ImageContainer>
            <img src={hidden ? arrowDown : arrowUp } alt="" />
          </ImageContainer>
          <h4>James Grantham</h4>
          <ImageContainer>
            <img src={hidden ? arrowDown : arrowUp } alt="" />
          </ImageContainer>
        </StyledTitle>
      </StyledHeader>
      <StyledHiddenDiv style={hidden ? null : openDiv}>
        <StyledLinkButton>
          <a href="https://github.com/jrgrantham">GitHub</a>
        </StyledLinkButton>
        <StyledMiddleButton>
          <Link to='contact'>
            <h5>Contact me</h5>
          </Link>
        </StyledMiddleButton>
        <StyledLinkButton>
          <a href="https://www.linkedin.com/in/j-grantham/">LinkedIn</a>
        </StyledLinkButton>
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
  padding: .5rem 0
  width: 300px
  background-color: ${greyLight}
  border-radius: ${borderRad}
  cursor: pointer

  @media (pointer:fine) {
    &:hover {
      background-color: ${orangeMedium};
      transition: background-color ${transition}
    }
  }
`;

const StyledTitle = styled.div`
  display: flex
  justify-content: center
`;

const ImageContainer = styled.div`
  display: flex
  justify-content: center
  align-items: center
  min-height: 100%
  width: 50px
  img {
    opacity: 0.08
    height: 25px
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
  height: "55px"
};

const StyledLinkButton = styled.div`
width: 30%
  a {
    font-size: 1.2rem
    display: block
    padding: 10px 0
    background-color: ${orangeMedium}
    border-radius: ${borderRad}
  }

  @media (pointer:fine) {
    &:hover {
      background-color: ${null};
      transition: background-color ${transition}
    }
  }
`;

const StyledMiddleButton = styled.div`
  padding: 10px 0
  background-color: ${orangeMedium}
  border-radius: ${borderRad}
  cursor: pointer
  width: 38%

  @media (pointer:fine) {
    &:hover {
      background-color: ${null};
      transition: background-color ${transition}
    }
  }
`;
