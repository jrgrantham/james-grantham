import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/mail-512.png";
import phone from "../../images/phone.png";

export default function SiteLinks(props) {

  const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `

  const Links = styled.div`
    // ${props.backgroundColor};
    display: flex;
    justify-content: space-evenly;
    padding: 50px 0;
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
    }
  `;

  return (
    <Container>
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
