import React from "react";
import styled, { keyframes } from "styled-components";
import { welcomeMessage, introduction } from "../../data/introduction";
import less from "../../images/less.png";
import styledC from "../../images/styledComps.png";
import html from "../../images/html.png";
import python from "../../images/python-logo.png";
import js from "../../images/js.png";
import react from "../../images/react.png";

export default function Introduction() {
  return (
    <Container>
      <h4>{welcomeMessage}</h4>
      <div></div>
      <p>{introduction}</p>
      <div className="logos">
        <Image1 className="image">
          <img src={react} alt="react" />
        </Image1>
        <Image2 className="image">
          <img src={less} alt="less" />
        </Image2>
        <Image3 className="image">
          <img src={styledC} alt="styledC" />
        </Image3>
        <Image4 className="image">
          <img src={html} alt="html" />
        </Image4>
        <Image5 className="image">
          <img src={python} alt="python" />
        </Image5>
        <Image6 className="image">
          <img src={js} alt="js" />
        </Image6>
      </div>
    </Container>
  );
}

const imageSize = 60; // px
const logosWidth = 1000; // px visible area
const imageOffset = 250; // px use this for spacing
const duration = 10; // seconds
const imageCount = 6;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width 80%;
  margin: 60px 0 20px 0;

  .logos {
    margin-top: 40px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    height: ${imageSize}px;
    width: ${logosWidth}px;
    max-width: 100%;
    // border: 1px solid red;
    // border-radius: 100px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
  
  p {
    max-width: 90%;
    text-align: center;
    margin: 20px 0px;
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

const StyledAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: ${imageSize}px;
  height: ${imageSize}px;

  left: -${imageSize}px;
  animation-name: ${move};
  animation-duration: ${duration}s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
// create a component that will move everything we pass in

const Image1 = styled(StyledAnimation)`
  animation-delay: ${(0 * duration) / imageCount}s
`;

const Image2 = styled(StyledAnimation)`
  animation-delay: ${(1 * duration) / imageCount}s
`;

const Image3 = styled(StyledAnimation)`
  animation-delay: ${(2 * duration) / imageCount}s
`;

const Image4 = styled(StyledAnimation)`
  animation-delay: ${(3 * duration) / imageCount}s
`;

const Image5 = styled(StyledAnimation)`
  animation-delay: ${(4 * duration) / imageCount}s
`;

const Image6 = styled(StyledAnimation)`
  animation-delay: ${(5 * duration) / imageCount}s
`;
