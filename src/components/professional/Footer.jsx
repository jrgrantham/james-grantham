import React from "react";
import styled from "styled-components";

import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/mailNew.png";
import {
  transition,
  professionalBack,
} from "../../views/styling";
import { SmallAnchorButton } from "../reusable/Buttons";

export default function Footer() {
  return (
    <Container>
      <SmallAnchorButton content="Home" target="/" />
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${professionalBack};
  width: 100%
  max-width: 1000px;
  position: fixed;
  bottom: 0;
  padding: 0 10px 0 20px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  img {
    display: flex;
    width: 30px;
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