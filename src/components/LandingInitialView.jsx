import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import jamesPhoto from "../../src/images/james.jpg";

import {
  transition,
  greyMedium,
  borderRad,
  blackOff,
  headerHeight,
  footerHeight
} from "../views/styling";

export default function LandingInitialView() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <LandingContainer>
      <LandingContent>
        <h1>James Grantham</h1>
        <div className="img ">
          <img src={jamesPhoto} alt="" />
        </div>
        <div>
          <h3>Mechanical Engineer</h3>
          <p>turned</p>
          <h3>Full-stack Web Developer</h3>
        </div>
        <Link to="/professional">
          <h4>Further Information</h4>
        </Link>
      </LandingContent>
    </LandingContainer>
  );
}

let vh = window.innerHeight < 630 ? 630 : window.innerHeight;
console.log(vh);

const LandingContainer = styled.div`
  height: ${vh - headerHeight - footerHeight}px
  width: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 2px solid green
`;

const LandingContent = styled.div`
  width: 100%
  height: ${vh - headerHeight - footerHeight}px
  min-height: 500px
  max-height: 800px
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  // border: 2px solid green

  div {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: center;
  }

  .img {
    width: 90%
    max-width: 800px
  }
  
  img {
    max-width: 100%
    max-height: 100%
    border-radius: ${borderRad}
  }

  h4 {
    padding: 1rem 0
    min-width: 15rem
    border: 2px solid ${blackOff}
    border-radius: ${borderRad}

    @media (pointer:fine) {
      &:hover {
        background-color: ${greyMedium};
        transition: background-color ${transition}
      }
    }
  }
`;