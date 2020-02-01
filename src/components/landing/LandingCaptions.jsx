import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { captions } from "../../data/captions";

import {
  mediaBreak,
  landingCaptionBack1,
  landingCaptionBack2,
  landingCaptionBorder,
  landingCaption,
  landingCaptionFont,
  appWidth,
  transition,
  landingInitialFont,
  borderRad,
  landingInitial1
} from "../../views/styling";

export default function LandingCaptions() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <Captions id="captions">
      <h1>About me</h1>

      {captions.map((caption, index) => (
        <CaptionContainer
          key={index}
          className={index % 2 === 0 ? "left" : "right"}
        >
          <Caption>
            <h4 style={fontStyle}>{caption}</h4>
          </Caption>
        </CaptionContainer>
      ))}
      <p>For more information about me, tap the button below...</p>
      <Link to="/professional">
        <h6>
          Learn more about me
        </h6>
      </Link>
    </Captions>
  );
}

const fontStyle = {
  color: landingCaptionFont,
  fontWeight: "bold"
};

const Captions = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  max-width: ${appWidth}
  // background-color: ${landingCaptionBack1};
  // background-image: linear-gradient(${landingCaptionBack1}, ${landingCaptionBack2});
  width: 100%;

  h1 {
    font-weight: bold;
    padding: 60px 0;
  }

  h6 {
    color: FloralWhite;
    font-weight: bold;
    background-color: DodgerBlue;
    padding: 1rem 2.6rem;
    margin-bottom: 50px;
    border-radius: ${borderRad};

    @media (pointer: fine) {
      &:hover {
        background-color: ${landingInitial1};
        transition: background-color ${transition};
      }
    }
  }

  p {
    color: rgb(0,0,0, 0.1)
    padding: 10px;
    text-align: center;
    margin-bottom: 40px;

  }

  @media (min-width: ${mediaBreak}) {
    padding: 0 100px;
    .left {
      justify-content: flex-start;
    }
    .right {
      justify-content: flex-end;
    }
  }
`;

const CaptionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Caption = styled.div`
  background-color: ${landingCaption};
  margin: 0 30px 50px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${landingCaptionBorder};
  border-radius: 3px;
  padding: 15px;
  width: 300px;
  min-height: 120px;
  transition: all ${transition};

  @media (min-width: ${mediaBreak}) {
    width: 60%;
    min-width: 400px;
    min-height: 170px;
  }

  @media (pointer: fine) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
