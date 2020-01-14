import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import james from "../../src/images/james.jpg";

import { appColor, color, transition } from "./styling";

export default function Landing() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <Position>
      <LandingStyle>
        <h2>James Grantham</h2>
        <div>
          <img src={james} alt="" />
        </div>
        <Career>
          <h4>Full-stack Web Developer</h4>
          <h4>Mechanical Engineer</h4>
        </Career>
        <Buttons>
          <Link to="/personal/phonenumbers">
            <h5>Personal</h5>
          </Link>
          <Link to="/professional">
            <h5>Professional</h5>
          </Link>
        </Buttons>
      </LandingStyle>
    </Position>
  );
}

const Position = styled.div`
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  // border: 2px solid red

  @media (min-height: 850px) {
    min-height: 100vh
  }
`;

const LandingStyle = styled.div`
  height: 600px
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  // border: 2px solid green

  img {
    width: 300px
    border-radius: 10px
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
  height: 140px

  h5 {
    padding: 1rem 0
    min-width: 15rem
    border: 1px solid ${color}
    border-radius: 8px

    @media (pointer:fine) {
      &:hover {
        color: ${appColor};
        background-color: ${color};
        transition: background-color ${transition}
      }
    }
  }
`;
