import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import jamesPhoto from "../../images/james.jpg";

import {
  headerHeight,
  footerHeight,
  fontColour,
  buttonOrange,
  fontColourDarkMode,
  transition,
} from "../../views/styling";

export default function LandingInitialView() {
  useEffect(() => {
    document.getElementById("img").classList.remove("hide");
    // setTimeout(function() {
    document.getElementById("name").classList.remove("hide");
    document.getElementById("jobs").classList.remove("hide");
    // }, 500);
    console.log("Landing InitialView: useeffect ran, HAS empty array");
  }, []);

  return (
      <LandingContent>
        <div id="name" className="hide">
          <h1 className="toggle darkmode">James Grantham</h1>
        </div>
        <div id="img" className="hide img">
          <img src={jamesPhoto} alt="James Grantham" />
        </div>
        <div id="jobs" className="hide">
          <h3 className="toggle darkmode">Mechanical Engineer</h3>
          <p className="toggle darkmode">turned</p>
          <h3 className="toggle darkmode">Software Engineer</h3>
        </div>
      </LandingContent>
  );
}

let vh = Math.max(window.innerHeight, 550);

const colours = keyframes`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
`;

const swell = keyframes`
  0% { color: ${fontColour} }
  20% { color: ${buttonOrange} }
  50% { transform: scale(1.03) }
  70% { color: ${buttonOrange}}
  100% { color: ${fontColour} }
`

const LandingContent = styled.div`
  width: 100%;
  height: ${vh - headerHeight - footerHeight}px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  div {
    transition: opacity ${transition * 10}s;
  }
  
  .img {
    width: 90%;
    max-width: 800px;
    max-width: 90vh;
    transition: max-width 2s ease-in-out;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50px;
  }

  p {
    text-align: center;
    font-weight: bold;
    color: 	#BEBEBE;
  }

  p.darkmode {
    color: #3e3e3e;
  3}

  // h1,
  // h2,
  // h3 {
  //   animation: ${swell} 1s linear 1;
  //   animation-delay: 3s;
  // }


  h1,
  h2,
  h3 {
    background-image: linear-gradient(
      to right,
      ${fontColour},
      ${fontColour},
      ${fontColour},
      ${buttonOrange},
      ${buttonOrange},
      ${fontColour},
      ${fontColour},
      ${fontColour}
    );
    color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -o-background-clip: text;
    -ms-background-clip: text;
    animation: ${colours} 3s linear 1;
    background-size: 500%;
    animation-delay: 2s
  }

  h1.darkmode,
  h2.darkmode,
  h3.darkmode {
    background-image: linear-gradient(
      to right,
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${buttonOrange},
      ${buttonOrange},
      ${fontColourDarkMode},
      ${fontColourDarkMode},
      ${fontColourDarkMode}
    );
  }

  // needs to be at the bottom so its applied last before its removed
  .hide {
    opacity: 0;
    max-width: 0px;
  }
`;
