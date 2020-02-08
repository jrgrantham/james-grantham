import React from "react";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
import styled from "styled-components";

import { borderRad, transition } from "../../views/styling";

export default function ProjectCard(props) {
  return (
    <>
      <FlipCard>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={props.project.image}
              alt={props.project.title}
              // style={imgStyle}
            />
            <div className="buttons">
              {props.project.link === "" ? null : (
                <a href={props.project.link}>visit</a>
              )}
              <a href={props.project.repo}>github</a>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="details">
              {/* <h2>{props.project.title}</h2> */}
              {/* <h4>{props.project.uses}</h4> */}
              <h5>{props.project.description}</h5>
            </div>
            <div className="buttons">
              {props.project.link === "" ? null : (
                <a href={props.project.link}>visit</a>
              )}
              <a href={props.project.repo}>github</a>
            </div>
          </div>
        </div>
      </FlipCard>
    </>
  );
}

const FlipCard = styled.div`
  background-color: transparent;
  width: 90%;
  max-width: 400px;
  height: 450px;
  perspective: 1000px;
  margin: 0 25px 50px 25px;

  @media (max-width: 500px) {
    width: 300px;
    height: 360px;
    margin-bottom: 40px;
  }

  a {
    display: inline-block;
    min-width: 130px;
    padding: 10px;
    border-radius: ${borderRad}
    background: dodgerblue;
    color: floralwhite;
    font-weight: bold;
    transition: opacity ${transition};

    @media (max-width: 330px) {
      width: 90%;
      margin: 5px;
      padding: 5px;
    }

    @media (pointer: fine) {
      &:hover {
        opacity: 0.75;
      }
    }
  }

  img {
    width: 85%;
    max-width: 350px;
    max-height: 350px;
  }

  @media (pointer: fine) {
    &:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    background-color: white;
  }

  .flip-card-front {
    align-items: center;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 330px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
