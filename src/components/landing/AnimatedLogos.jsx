import React from "react";
import styled, { keyframes } from "styled-components";
import less from "../../images/less.png";
import styledC from "../../images/styledComps.png";
import html from "../../images/html.png";
import python from "../../images/python-logo.png";
import js from "../../images/js.png";
import react from "../../images/react.png";

export default function AnimatedLogos() {
  return (
    <Container>
      <Image1>
        <img src={react} alt="react" />
      </Image1>
      <Image2>
        <img src={less} alt="less" />
      </Image2>
      <Image3>
        <img src={styledC} alt="styledC" />
      </Image3>
      <Image4>
        <img src={html} alt="html" />
      </Image4>
      <Image5>
        <img src={python} alt="python" />
      </Image5>
      <Image6>
        <img src={js} alt="js" />
      </Image6>
    </Container>
  );
}

const imageSize = 60; // px
const logosWidth = 1000; // px visible area
const imageOffset = 350; // px use this for spacing
const duration = 10; // seconds
const imageCount = 6;

const Container = styled.div`
  margin: 40px 0 40px 0;
  position: relative;
  overflow: hidden;
  height: ${imageSize}px;
  width: ${logosWidth}px;
  max-width: 80%;
  // border: 1px solid red;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

// Create the keyframes
const move = keyframes`
  from {
    left: ${logosWidth + imageOffset}px;
  }
  to {
    left: -${imageSize + imageOffset}px;
  }
`;

// create a component that will move everything we pass in
const StyledAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: ${imageSize}px;
  height: ${imageSize}px;

  left: -${imageSize}px; // hold the image outside the div;
  animation-name: ${move};
  animation-duration: ${duration}s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Image1 = styled(StyledAnimation)`
  animation-delay: ${(-0 * duration - 1.5) / imageCount}s;
`;

const Image2 = styled(StyledAnimation)`
  animation-delay: ${(-1 * duration - 1.5) / imageCount}s;
`;

const Image3 = styled(StyledAnimation)`
  animation-delay: ${(-2 * duration - 1.5) / imageCount}s;
`;

const Image4 = styled(StyledAnimation)`
  animation-delay: ${(-3 * duration - 1.5) / imageCount}s;
`;

const Image5 = styled(StyledAnimation)`
  animation-delay: ${(-4 * duration - 1.5) / imageCount}s;
`;

const Image6 = styled(StyledAnimation)`
  animation-delay: ${(-5 * duration - 1.5) / imageCount}s;
`;
