import React from "react";
import styled from "styled-components";
import { captions } from "../data/captions";

import { mediaBreak, orangeMedium } from "../views/styling";

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
          <Caption>{caption}</Caption>
        </CaptionContainer>
      ))}
    </Captions>
  );
}

const Captions = styled.div`
background-color: ${orangeMedium}
  padding: 50px 100px;
  @media (min-width: ${mediaBreak}) {
    width: 100%;
    .left {
      justify-content: flex-start;
    }
    .right {
      justify-content: flex-end;
    }
  }
`;

const CaptionContainer = styled.div`
  justify-content: center
  width: 100%
  display: flex 
  // border: 1px solid red
`;

const Caption = styled.div`
  margin: 20px 0
  display: flex
  justify-content: center
  align-items: center
  // margin: 50px auto
  border: 10px solid brown
  border-radius: 10px
  padding: 5px
  width: 300px
  height: 200px
  font-size: 2rem

  @media (min-width: ${mediaBreak}) {
    margin: 40px 0
    width: 60%;
    min-width: 300px
  }
`;
