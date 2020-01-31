import React from "react";
import styled from "styled-components";

import { borderRad } from "../../views/styling";

export default function ProjectCard(props) {

          return (
            <StlyedCard>
              <div className="image">
                <img src={props.project.image} alt={props.project.title} />
              </div>
              <div className="info">
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
            </StlyedCard>
          );

}

const StlyedCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 3px
  margin: 0 30px 50px 30px;
  overflow: hidden;
  background-color: white;
  max-width: 400px;

  .image {
    max-height: 360px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: white;
    // border: 1px solid blue


    img {
      // flex-shrink: 0;
      width: 70%;
      height: auto;
      padding: 20px;
      margin: 40px 0;
      border-top: 1px solid lightgrey
      border-bottom: 1px solid lightgrey
      // border: 1px solid blue
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // border: 1px solid blue

    .details {
      padding: 10px;
      // border: 1px solid red
    }

    .buttons {
      display: flex;
      justify-content: space-evenly;
      padding: 30px 0;
      // border: 1px solid red
    }

    a {
      display: inline-block;
      min-width: 130px;
      padding: 10px;
      border: 1px solid grey;
      border-radius: ${borderRad}
    }
  }
`;
