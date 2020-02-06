import React from "react";
import styled, { keyframes } from "styled-components";
import {
  headerHeight,
  landingHeader,
  landingHeadFootOpacity,
  landingHeaderFont
} from "../../views/styling";
import logo192 from "../../images/logo192.png";

export default function ContactMeHeader(props) {
  let project;
  let captions;
  let contact;

  window.onload = function() {
    // const linkedDiv = document.getElementById("projects");
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
  // Here we create a component that will rotate everything we pass in over two seconds
  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 5s linear infinite;
    // padding: 2rem 1rem;
    // font-size: 1.2rem;
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
      }
    }

    .links {
      display: flex;
      // justify-content: space-between;
      // align-items: center;
      // border: 1px solid red;
    }

    p {
      text-align: center;
      cursor: pointer;
      color: ${landingHeaderFont};
      padding: 0 10px;
      font-size: 1rem;
      font-weight: bold;
    }
  `;

  return (
    <Header>
      <Rotate>
        <div className="image">
          <img src={logo192} alt="logo" id="logo" />
        </div>
      </Rotate>
      <div className="links">
        <p onClick={() => scroll(0)}>Top</p>
        <p onClick={() => scroll(project)}>Projects</p>
        <p onClick={() => scroll(captions)}>Captions</p>
        <p onClick={() => scroll(contact)}>Contact</p>
      </div>
      <Rotate>
        <div className="image remove" />
      </Rotate>
    </Header>
  );
}
