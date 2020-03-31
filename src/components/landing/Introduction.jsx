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
        <Move1 className="image">
          <img src={react} alt="react" />
        </Move1>
        <Move2 className="image">
          <img src={less} alt="less" />
        </Move2>
        <Move3 className="image">
          <img src={styledC} alt="styledC" />
        </Move3>
        <Move4 className="image">
          <img src={html} alt="html" />
        </Move4>
        <Move5 className="image">
          <img src={python} alt="python" />
        </Move5>
        <Move6 className="image">
          <img src={js} alt="js" />
        </Move6>
      </div>
    </Container>
  );
}

const imageSize = 70; // px
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
    position: relative;
    overflow: hidden;
    height: 100px;
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

const StyledImage = styled.div`
  left: -${imageSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: ${imageSize}px;
  height: ${imageSize}px;
`;
// create a component that will move everything we pass in

const Move1 = styled(StyledImage)`
  animation: ${move} ${duration}s linear 0s infinite;
`;

const Move2 = styled(StyledImage)`
  animation: ${move} ${duration}s linear ${duration / imageCount}s infinite;
`;

const Move3 = styled(StyledImage)`
  animation: ${move} ${duration}s linear ${(2 * duration) / imageCount}s
    infinite;
`;

const Move4 = styled(StyledImage)`
  animation: ${move} ${duration}s linear ${(3 * duration) / imageCount}s
    infinite;
`;

const Move5 = styled(StyledImage)`
  animation: ${move} ${duration}s linear ${(4 * duration) / imageCount}s
    infinite;
`;

const Move6 = styled(StyledImage)`
  animation: ${move} ${duration}s linear ${(5 * duration) / imageCount}s
    infinite;
`;
