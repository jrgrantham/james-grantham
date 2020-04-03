import React from "react";
import styled from "styled-components";

import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/mailNew.png";
import { transition, fontColourDarkMode, appColour } from "../../views/styling";
import Contact from "./ContactForm";

export default function SiteLinks(props) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    h4 {
      padding: 60px 0px 20px 0px;
    }
  `;

  const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 0;
    max-width: 700px;

    img {
      display: flex;
      width: 35px;
      height: auto;
    }

    .mail {
    }
    
    .image {
      background-color: ${appColour};
      padding: 20px;
      transition: all ${transition};
      // border: 1px solid red;
      border-radius: 100%;

      @media (pointer: fine) {
        &:hover {
          transform: scale(1.6);
        }
      }
    }
  `;

  const { showContactMe, setShowContactMe } = props;

  return (
    <Container id="contact" onClick={() => setShowContactMe(false)}>
      <h4>Find me...</h4>
      <Links id="contact">
        <a href="https://github.com/jrgrantham" className="image">
          <img src={github} alt="" />
        </a>
        <div className="image mail" onClick={(e) => {
          e.stopPropagation()
          setShowContactMe(!showContactMe)
        }}>
          <img src={mail} alt="" />
        </div>
        <a href="https://www.linkedin.com/in/j-grantham/" className="image">
          <img src={linkedin} alt="" />
        </a>
      </Links>
      <Contact
      // <Contact style={{maxHeight: showContactMe ? '500px' : 0}}
        showContactMe={showContactMe}
        // setShowContactMe={setShowContactMe}
      />
    </Container>
  );
}
