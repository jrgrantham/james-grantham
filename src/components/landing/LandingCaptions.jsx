import React from "react";
import styled from "styled-components";
import { captions } from "../../data/captions";

import {
  mediaBreak,
  landingCaptionBack1,
  landingCaptionBack2,
  landingCaptionBorder,
  landingCaption,
  landingCaptionFont
} from "../../views/styling";

export default function LandingCaptions() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <Captions>
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
  background-color: ${landingCaptionBack1};
  // background-image: linear-gradient(${landingCaptionBack1}, ${landingCaptionBack2});
  padding: 50px 0;
  width: 100%;

  @media (min-width: ${mediaBreak}) {
    padding: 50px 100px;
    .left {
      justify-content: flex-start;
    }
    .right {
      justify-content: flex-end;
    }
  }
`;

const CaptionContainer = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
`;

const Caption = styled.div`
  background-color: ${landingCaption};
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: 50px auto;
  border: 10px solid ${landingCaptionBorder};
  border-radius: 10px;
  padding: 15px;
  width: 300px;
  min-height: 200px;

  @media (min-width: ${mediaBreak}) {
    margin: 40px 0;
    width: 60%;
    min-width: 400px;
  }
`;
