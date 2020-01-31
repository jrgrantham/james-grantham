import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  headerHeight,
  borderRad,
  landingHeader,
  landingInitial1,
  landingHeadFootOpacity
} from "../../views/styling";

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

  const Header = styled.div`
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${landingHeader};
    opacity: ${landingHeadFootOpacity};
    min-height: ${headerHeight}px;
    width: 100%;
    // max-width: 1000px;
    position: fixed;
    top: 0;
    padding: 0 10px;
  `;

  const button = {
    textAlign: 'center',
    cursor: "pointer",
    // margin: "0 10px",
    // minWidth: "90px",
    // border: `1px solid ${landingInitial1}`,
    // borderRadius: borderRad,
    color: landingInitial1,
    padding: "0 10px",
    fontSize: '1rem',
    fontWeight: 'bold'
  };

  return (
    <Header>
      <>
        <p style={button} onClick={() => scroll(0)}>
          Top
        </p>
        <p style={button} onClick={() => scroll(project)}>
          Projects
        </p>
        <p style={button} onClick={() => scroll(captions)}>
          Captions
        </p>
        <p style={button} onClick={() => scroll(contact)}>
          Contact
        </p>
      </>
    </Header>
  );
}
