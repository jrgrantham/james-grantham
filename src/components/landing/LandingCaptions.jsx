import React from "react";
import styled from "styled-components";
import { captions } from "../../data/captions";

import {
  mediaBreak,
  landingCaptionBack1,
  landingCaptionBack2,
  landingCaptionBorder,
  landingCaption,
  landingCaptionFont,
  appWidth
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
    </Captions>
  );
}

const fontStyle = {
  color: landingCaptionFont,
  fontWeight: "bold"
};

const Captions = styled.div`
  max-width: ${appWidth}
  // background-color: ${landingCaptionBack1};
  // background-image: linear-gradient(${landingCaptionBack1}, ${landingCaptionBack2});
  width: 100%;

  h1 {
    font-weight: bold;
    padding: 20px 0;
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

  @media (min-width: ${mediaBreak}) {
    width: 60%;
    min-width: 400px;
    min-height: 170px;
  }
`;
