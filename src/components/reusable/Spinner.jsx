import React from 'react';
import styled from 'styled-components';

import { mediaBreak, borderRad } from "../../views/styling";

export default function Spinner() {
  return (
    <Position>
      <Container>
      <h4>Loading...</h4>
        <Animation>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </Animation>
      </Container>
    </Position>
  );
}

const Position = styled.div`
  height: 80vh
  display: flex
  justify-content: center
  align-items: center
`

const Container = styled.div`
  h4 {
    color: black
  }
  background: #E8E8E8
  width: 500px
  height: 200px
  display: flex
  flex-direction: column
  justify-content: space-evenly
  align-items: center
  
  @media (min-width: ${mediaBreak}) {
    border: 1px solid black
    border-radius: ${borderRad}
  }
`

const Animation = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2s infinite ease-in-out both;
  }
  .sk-chase-dot:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: black;
    border-radius: 100%;
    animation: sk-chase-dot-before 2s infinite ease-in-out both;
  }
  .sk-chase-dot:nth-child(1) {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2) {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3) {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4) {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5) {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6) {
    animation-delay: -0.6s;
  }
  .sk-chase-dot:nth-child(1):before {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2):before {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3):before {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4):before {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5):before {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6):before {
    animation-delay: -0.6s;
  }
  @keyframes sk-chase {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes sk-chase-dot {
    80%,
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    }
    100%,
    0% {
      transform: scale(1);
    }
  }
`;
