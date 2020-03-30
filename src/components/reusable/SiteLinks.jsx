import React from "react";
import styled from "styled-components";

import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/mailNew.png";
import { transition } from "../../views/styling";

export default function SiteLinks() {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    
    h4 {
      padding: 60px 0px 20px 0px;
    }
  `

  const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    max-width: 700px;

    img {
      display: flex;
      width: 35px;
      height: auto;
    }
    
    .image {
      padding: 20px;
      transition: all ${transition};
      
      @media (pointer: fine) {
        &:hover {
          transform: scale(1.6);
        }
      }
    }
  `;

  return (
    <Container id='contact'>
      <h4>Find me...</h4>
      <Links id="contact">
        <a href="https://github.com/jrgrantham" className="image">
          <img src={github} alt="" />
        </a>
        <a href='#0' className="image">
          <img src={mail} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/j-grantham/" className="image">
          <img src={linkedin} alt="" />
        </a>
      </Links>
    </Container>
  );
}
