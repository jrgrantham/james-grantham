import React from "react";
import { transition } from "../../views/styling";
import styled, { keyframes } from "styled-components";

import lessD from "../../images/lessD.png";
import styledC from "../../images/styled.png";
import html from "../../images/html.png";
import python from "../../images/pythonLogo.png";
import js from "../../images/js.png";
import react from "../../images/react.svg";
import css from "../../images/css.png";
import nodejs from "../../images/nodejs.svg";
import mysql from "../../images/mysql.svg";
import postgress from "../../images/postgresql.svg";
import redux from "../../images/redux.svg";
import git from "../../images/git.png";

import drill from "../../images/drill.png";
import hat from "../../images/hat.png";
import tools from "../../images/tools.png";

const images = [
  styledC,
  lessD,
  hat,
  git,
  redux,
  html,
  python,
  drill,
  js,
  react,
  nodejs,
  css,
  tools,
  mysql,
  postgress
];

export default function AnimatedLogos() {
  return (
    <Container>
      {images.map((image, index) => (
        <StyledAnimation
          style={{
            animationDelay: `${(-index * duration - 1.5) /
              images.length}s`
          }}
          key={index}
        >
          <img src={image} alt="" />
        </StyledAnimation>
      ))}
    </Container>
  );
}

const imageSize = 50; // px
const ratio = 1.4 // ratio of width to height space for the images
const logosWidth = 1000; // px visible area
const imageOffset = 600; // px use this for spacing
const duration = 15; // seconds

const Container = styled.div`
  margin: 80px 0 50px 0;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
  height: ${imageSize + 40}px;
  width: ${logosWidth}px;
  max-width: 70%;
  // border: 1px solid red;

  @media (max-width: 800px) {
    margin: 40px 0 10px 0;
  }

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
  width: ${imageSize * ratio}px;
  height: ${imageSize}px;
  left: -${imageSize}px; // hold the image outside the div;
  animation-name: ${move};
  animation-duration: ${duration}s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
