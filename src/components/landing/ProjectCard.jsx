import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import styled from "styled-components";

import { borderRad } from "../../views/styling";

export default function ProjectCard(props) {
  return (
    <>
      <FlipCard>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src={props.project.image}
              alt={props.project.title}
              // style={imgStyle}
            />
            <div className="buttons">
              {props.project.link === "" ? null : (
                <a href={props.project.link}>{"url"}</a>
              )}
              <a href={props.project.repo}>{"github"}</a>
            </div>
          </div>
          <div class="flip-card-back">
            <div className="details">
              {/* <h2>{props.project.title}</h2> */}
              {/* <h4>{props.project.uses}</h4> */}
              <h5>{props.project.description}</h5>
            </div>
            <div className="buttons">
              {props.project.link === "" ? null : (
                <a href={props.project.link}>{"url"}</a>
              )}
              <a href={props.project.repo}>{"github"}</a>
            </div>
          </div>
        </div>
      </FlipCard>
    </>
  );
}

const FlipCard = styled.div`
  background-color: transparent;
  width: 400px;
  height: 500px;
  perspective: 1000px;
  margin: 0 25px 50px 25px;

  @media (max-width: 500px) {
    width: 300px;
    height: 400px;
    margin: 20px 10px;
  }

  a {
    display: inline-block;
    min-width: 130px;
    padding: 10px;
    border: 1px solid grey;
    border-radius: ${borderRad}
  }

  img {
    max-width: 350px;
    max-height: 350px;

    @media (max-width: 500px) {
      width: 250px;
      height: 250px;
    }
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
  }

  .flip-card-front {
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .flip-card-back {
    background-color: white;
    transform: rotateY(180deg);
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    padding: 30px 0;
    // border: 1px solid red
  }
`;
