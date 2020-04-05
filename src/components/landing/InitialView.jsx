import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import jamesPhoto from "../../../src/images/james.jpg";

import {
  headerHeight,
  footerHeight,
  fontColour,
  buttonOrange,
  buttonBlue,
  fontColourDarkMode
} from "../../views/styling";

export default function LandingInitialView() {
  useEffect(() => {
    setTimeout(function() {
      document.getElementById("name").classList.remove("hide");
      document.getElementById("jobs").classList.remove("hide");
    }, 500);

    document.getElementById("img").classList.remove("hide");
  }, []);

  return (
    <LandingContainer>
      <LandingContent>
        <div id="name" className="hide">
          <h1 className="toggle darkmode">James Grantham</h1>
        </div>
        <div id="img" className="hide img">
          <img src={jamesPhoto} alt="James Grantham" />
        </div>
        <div id="jobs" className="hide">
          <h3>Mechanical Engineer</h3>
          <p>turned</p>
          <h3>Product Engineer</h3>
        </div>
      </LandingContent>
    </LandingContainer>
  );
}

let vh = Math.max(window.innerHeight, 630);

const LandingContainer = styled.div`
  height: ${vh - headerHeight - footerHeight}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const colours = keyframes`
  from {
    background-position: 100%;
  }
  to {
    background-position: 0%;
  }
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
    transition: opacity 2s;
  }

  .img {
    width: 90%;
    max-width: 800px;
    max-width: 90vh;
    transition: max-width 1s;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20%;
    // border: 1px solid ${fontColour};
  }

  h1,
  h2,
  h3,
  p {
    font-weight: bold;
  }

  h1 {
    background-image: linear-gradient(
      to right,
      ${fontColour},
      ${fontColour},
      ${fontColour},
      ${buttonBlue},
      ${fontColour},
      ${fontColour},
      ${fontColour},
      ${fontColour},
      ${fontColour},
      ${buttonOrange},
      ${fontColour},
      ${fontColour},
      ${fontColour},
      ${fontColour},
      ${fontColour}
    );
    color: transparent;
    -webkit-background-clip: text;
    animation: ${colours} 8s linear infinite;
    background-size: 800%;
  }

  h1.darkmode {
    background-image: linear-gradient(
      to right,
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${buttonBlue},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${buttonOrange},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${fontColourDarkMode}
    );
    color: transparent;
    -webkit-background-clip: text;
    animation: ${colours} 8s linear infinite;
    background-size: 800%;
  }

  .hide {
    opacity: 0;
  }

  .hide {
    max-width: 0px;
  }
`;
