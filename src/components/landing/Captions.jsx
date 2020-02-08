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
  appWidth,
  transition,
  borderRad,
} from "../../views/styling";
import SectionTitle from "../reusable/SectionTitle";

export default function LandingCaptions() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <Captions id="captions">
      <SectionTitle
        title={"About me"}
        description={"Just a few summarising statements"}
      />
      {captions.map((caption, index) => (
        <CaptionContainer
          key={index}
          className={index % 2 === 0 ? "left" : "right"}
        >
          <Caption>
            <h4>{caption}</h4>
          </Caption>
        </CaptionContainer>
      ))}
    </Captions>
  );
}

const Captions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${appWidth};
  margin-bottom: 20px;

  @media (min-width: ${mediaBreak}) {
    // padding: 0 100px;
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
  // flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Caption = styled.div`
  background-color: ${landingCaption};
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${landingCaptionBorder};
  border-radius: ${borderRad};
  width: 85%;

  min-height: 80px;
  transition: all ${transition};

  @media (min-width: ${mediaBreak}) {
    margin: 0 30px 50px 30px;
    width: 60%;
    min-width: 500px;
    min-height: 120px;
  }

  @media (pointer: fine) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
