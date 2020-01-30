import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/mail-512.png";
import phone from "../../images/phone.png";

export default function SiteLinks(props) {
  const Links = styled.div`
    ${props.backgroundColor};
    display: flex;
    justify-content: center;
    padding: 50px;
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }

    .image {
      margin: 0 40px;
      width: 40px;
    }
  `;

  return (
    <Links id="contact">
      <a href="https://github.com/jrgrantham" className="image">
        <img src={github} alt="" />
      </a>
      <div className="image">
        <img src={mail} alt="" />
      </div>
      <Link to="/phonenumbers" className="image">
        <img src={phone} alt="" />
      </Link>
      <a href="https://www.linkedin.com/in/j-grantham/" className="image">
        <img src={linkedin} alt="" />
      </a>
    </Links>
  );
}
