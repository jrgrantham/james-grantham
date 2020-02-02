import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/mail-512.png";
import phone from "../../images/phone.png";
import { transition } from "../../views/styling";
import SectionTitle from "./SectionTitle";

export default function SiteLinks() {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    // height: 250px;
    // padding: 40px 0;
    margin-bottom: 50px;
    
    h3 {
      font-weight: bold;
    }
  `

  const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    min-width: 320px;
    width: 100%;
    max-width: 1000px;
    // border: 1px solid red

    img {
      width: 100%;
      height: auto;
    }
    
    .image {
      width: 40px;
      transition: all ${transition}
      
      @media (pointer: fine) {
        &:hover {
          transform: scale(2);
        }
      }
    }

  `;

  return (
    <Container>
      <SectionTitle title={'Find me...'} description={"Use  the links below to navigate"} />
      <Links id="contact">
        <a href="https://github.com/jrgrantham" className="image">
          <img src={github} alt="" />
        </a>
        <a to="/phonenumbers" className="image">
          <img src={mail} alt="" />
        </a>
        <Link to="/phonenumbers" className="image">
          <img src={phone} alt="" />
        </Link>
        <a href="https://www.linkedin.com/in/j-grantham/" className="image">
          <img src={linkedin} alt="" />
        </a>
      </Links>
    </Container>
  );
}
