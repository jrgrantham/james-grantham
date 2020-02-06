import React, { useEffect } from "react";
import styled from "styled-components";

import jamesPhoto from "../../../src/images/james.jpg";

import {
  transition,
  borderRad,
  headerHeight,
  footerHeight,
  landingInitial1,
  landingInitial2,
  landingInitialFont,
} from "../../views/styling";

export default function LandingInitialView() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  useEffect(() => {
    setTimeout(function() {
      document.getElementById("name").classList.remove("hide");
      document.getElementById("jobs").classList.remove("hide");
    }, 500);

    setTimeout(function() {
      document.getElementById("img").classList.remove("small");
    }, 100);
  }, []);

  return (
    <LandingContainer>
      <LandingContent>
        <div id="name" className="hide">
          <h2>James Grantham</h2>
        </div>
        <div id="img" className="small img">
          <img src={jamesPhoto} alt="" />
        </div>
        <div id="jobs" className="hide">
          <h3>Web Developer</h3>
          <p>-</p>
          <h3>Mechanical Engineer</h3>
        </div>
      </LandingContent>
    </LandingContainer>
  );
}

let vh = Math.max(window.innerHeight, 630)

const LandingContainer = styled.div`
  height: ${vh - headerHeight - footerHeight}px;
  // background-color: ${landingInitial1};
  // background-image: linear-gradient(${landingInitial1}, ${landingInitial2});
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 2px solid green;
`;

const LandingContent = styled.div`
  width: 100%;
  height: ${vh - headerHeight - footerHeight}px;
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: opacity 1s;
  }

  .img {
    width: 90%;
    max-width: 800px;
    max-width: 90vh;
    transition: max-width 1.5s;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: ${borderRad};
    border: 1px solid ${landingInitialFont};
  }

  h1,
  h2,
  h3,
  p {
    font-weight: bold;
  }

  h2 {
    @media (min-width: 800px) {
      font-size: 3rem;
    }
    @media (min-width: 1200px) {
      font-size: 4rem;
    }
  }

  .hide {
    opacity: 0;
  }

  .small {
    max-width: 0px
  }
`;
