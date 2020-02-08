import React from "react";
import styled from "styled-components";
import { captions } from "../../data/captions";

import {
  mediaBreak,
  landingCaptionBorder,
  landingCaption,
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
        title={"Values"}
        description={"For details hit the learn about me button"}
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
  width: 100%;
  max-width: ${appWidth};
  margin-bottom: 20px;

  @media (min-width: ${mediaBreak}) {
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
  width: 100%;
`;

const Caption = styled.div`
  background-color: ${landingCaption};
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${landingCaptionBorder};
  border-radius: ${borderRad};
  width: 85%;
  min-height: 70px;
  transition: all ${transition};

  @media (min-width: ${mediaBreak}) {
    margin: 0 80px 40px 80px;
    width: 500px;
    min-height: 100px;
  }

  @media (pointer: fine) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
