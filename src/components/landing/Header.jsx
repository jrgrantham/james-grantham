import React from "react";
import styled, { keyframes } from "styled-components";
import {
  headerHeight,
  landingHeader,
  landingHeadFootOpacity,
  landingHeaderFont,
  transition
} from "../../views/styling";
import logo192 from "../../images/logo192.png";
import moon from "../../images/moon.png";
import sunYellow from "../../images/sunYellow.png";

export default function ContactMeHeader() {
  let project;
  let captions;
  let contact;

  window.onload = function() {
    project =
      document.getElementById("projects").getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;
    captions =
      document.getElementById("captions").getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;
    contact =
      document.getElementById("contact").getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;
  };

  function scroll(selectedDiv) {
    window.scroll({ top: selectedDiv, left: 0, behavior: "smooth" });
  }

  // Create the keyframes
  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
    `;
  // create a component that will rotate everything we pass in
  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 8s linear infinite;
  `;

  const Header = styled.div`
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${landingHeader};
    opacity: ${landingHeadFootOpacity};
    height: ${headerHeight}px;
    width: 100%;
    // max-width: 1000px;
    position: fixed;
    top: 0;
    padding: 0 10px;

    .image {
      height: 25px;
      width: 25px;
      // border: 1px solid red

      img {
        max-height: 100%;
        width: auto;
        transition: all 1s;
      }
    }

    .links {
      display: flex;
    }

    p {
      text-align: center;
      cursor: pointer;
      color: ${landingHeaderFont};
      padding: 0 10px;
      font-size: 1rem;
      font-weight: bold;
      transition: all ${transition};

      @media (pointer: fine) {
        &:hover {
          color: dodgerblue;
          transform: scale(1.2);
        }
      }

      @media (max-width: 400px) {
        font-size: 0.8rem;
      }
    }
  `;

  return (
    <Header>
      <Rotate className="image">
        <img src={logo192} alt="logo" id="logo" />
      </Rotate>
      <div className="links">
        <p onClick={() => scroll(0)}>Top</p>
        <p onClick={() => scroll(project)}>Projects</p>
        <p onClick={() => scroll(captions)}>Values</p>
        <p onClick={() => scroll(contact)}>Contact</p>
      </div>
      <div className="image">
        {/* <img src={moon} alt="mode" style={{padding: '3px'}} /> */}
      </div>
    </Header>
  );
}
