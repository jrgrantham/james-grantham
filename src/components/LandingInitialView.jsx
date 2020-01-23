import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import jamesPhoto from "../../src/images/james.jpg";

import {
  transition,
  borderRad,
  headerHeight,
  footerHeight,
  landingInitial,
  landingInitialFont
} from "../views/styling";

export default function LandingInitialView(props) {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  useEffect(() => {
    setTimeout(function() {
      document.getElementById("name").classList.remove("hide");
    }, 300);
  
    setTimeout(function() {
      document.getElementById("img").classList.remove("hide");
    }, 100);
  
    setTimeout(function() {
      document.getElementById("jobs").classList.remove("hide");
    }, 600);
  
    setTimeout(function() {
      document.getElementById("info").classList.remove("hide");
    }, 900);
  }, [])

  return (
    <LandingContainer onClick={() => props.setHiddenContact(true)}>
      <LandingContent>
        <div id="name" className="hide">
          <h1 style={fontStyle}>James Grantham</h1>
        </div>
        <div id="img" className="hide img">
          <img src={jamesPhoto} alt="" />
        </div>
        <div id="jobs" className="hide">
          <h3 style={fontStyle}>Mechanical Engineer</h3>
          <p style={fontStyle}>turned</p>
          <h3 style={fontStyle}>Full-stack Web Developer</h3>
        </div>
        <Link to="/professional">
          <h5 style={fontStyle} id="info" className="hide">
            Further Information
          </h5>
        </Link>
      </LandingContent>
    </LandingContainer>
  );
}

let vh = window.innerHeight < 630 ? 630 : window.innerHeight;

const LandingContainer = styled.div`
  height: ${vh - headerHeight - footerHeight}px
  background-color: ${landingInitial}
  width: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 2px solid green
`;

const fontStyle = {
  color: landingInitialFont
};

const LandingContent = styled.div`
  width: 100%
  height: ${vh - headerHeight - footerHeight}px
  // min-height: 500px
  max-height: 1000px
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
    transition: opacity 1s
  }

  .img {
    width: 90%
    max-width: 800px
    max-width: 90vh
    transition: opacity ${transition}
  }
  
  img {
    max-width: 100%
    max-height: 100%
    border-radius: ${borderRad}
    border: 1px solid  ${landingInitialFont}
  }

  h1, h3, p {
    font-weight: bold
  }

  h5 {
    margin-bottom: 20px
    padding: 1rem 0
    min-width: 15rem
    border: 1px solid ${landingInitialFont}
    border-radius: ${borderRad}
    transition: opacity 1s

    @media (pointer:fine) {
      &:hover {
        opacity: 0.5;
        transition: opacity ${transition}
      }
    }
  }

  .hide {
    opacity: 0
  }
`;
