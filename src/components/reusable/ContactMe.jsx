import React from "react";
import styled from "styled-components";

import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/mailNew.png";
import { transition, appColour, buttonOrange, professionalWidth } from "../../views/styling";
import Contact from "./ContactForm";

export default function ContactMe(props) {
  const { showContactMe, setShowContactMe } = props;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    // padding-top: 40px;

    h4, p {
      text-align: center;
      max-width: ${professionalWidth}px;
      padding: 20px 20px 0px 20px;
    }
    
    h4 {
      padding-top: 60px;
    }
  `;

  const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 15px 0;
    max-width: 700px;

    img {
      display: flex;
      width: 40px;
      height: auto;
    }

    .mail {
      margin-top: 30px;
      @media (pointer: fine) {
        &:hover {
          cursor: pointer;
        }
      }
    }

    .other {
      margin-bottom: 30px;
    }

    .image {
      background-color: ${appColour};
      padding: 25px;
      transition: all ${transition}s;
      // border: 1px solid red;
      border-radius: 50%;

      @media (pointer: fine) {
        &:hover {
          // border-radius: 30%
          transform: scale(1.2);
          // background: ${buttonOrange}
        }
      }
    }
  `;

  return (
    <Container id="contact" onClick={() => setShowContactMe(false)}>
      <h4>Find me...</h4>
      <Links id="contact">
        <a href="https://github.com/jrgrantham" className="image other">
          <img src={github} alt="" />
        </a>
        <div
          className="image mail"
          onClick={(e) => {
            e.stopPropagation();
            setShowContactMe(!showContactMe);
          }}
        >
          <img src={mail} alt="" />
        </div>
        <a href="https://www.linkedin.com/in/j-grantham/" className="image other">
          <img src={linkedin} alt="" />
        </a>
      </Links>
      <Contact showContactMe={showContactMe} />
    </Container>
  );
}
