import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import jamesPhoto from "../../src/images/james.jpg";

import { transition, greyMedium, borderRad, blackOff } from "./styling";

export default function Landing() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <Position>
      <Container>
        <Header>
        </Header>
        <img height style={{height: '1000px'}} src={jamesPhoto} alt="" />
        <Slant></Slant>
      </Container>
    </Position>
  );
}

const Container = styled.div`
height: 1000px
`

const Header = styled.div`
background-color: black;
height: 100px
clip-path: polygon(
  0 0,
  100% 0,
  100% 100%,
  0 calc(100% - 6vw)
);

`;

const Slant = styled.div`
  height: 40px;
  width: 100%;
  min-height: 30px;
  width: 100%;
  background-color: black;
  transform: skewY(5deg);
  padding: 50px 0;
`;

const Position = styled.div`
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center

  @media (min-height: 850px) {
    min-height: 100vh;
  }
`;

const LandingStyle = styled.div`
  margin: 40px
  height: 520px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // border: 2px solid green

  img {
    width: 300px
    border-radius: ${borderRad}
  }
`;

const Career = styled.div`
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 80px
`;

const Buttons = styled.div`
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 130px

  h5 {
    padding: 1rem 0
    min-width: 15rem
    border: 1px solid ${blackOff}
    border-radius: ${borderRad}

    @media (pointer:fine) {
      &:hover {
        background-color: ${greyMedium};
        transition: background-color ${transition}
      }
    }
  }
`;
