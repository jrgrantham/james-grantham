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
  const { hiddenContact, setHiddenContact } = props;

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
  };

  function scroll(selectedDiv) {
    window.scrollTo({ top: selectedDiv, behavior: "smooth" });
  }

  const Header = styled.div`
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
    cursor: "pointer",
    margin: "0 10px",
    minWidth: "90px",
    border: `1px solid ${landingInitial1}`,
    borderRadius: borderRad,
    color: landingInitial1,
    padding: "0 10px"
  };

  return (
    <Header
      onClick={e => {
        setHiddenContact(true);
      }}
    >
      {hiddenContact ? (
        <>
          <p
            style={button}
            onClick={e => {
              e.stopPropagation();
              setHiddenContact(!hiddenContact);
            }}
          >
            {hiddenContact ? "contact me" : "hide "}
          </p>
          <p style={button} onClick={() => scroll(project)}>
            projects
          </p>
          <p style={button} onClick={() => scroll(captions)}>
            captions
          </p>
        </>
      ) : (
        <>
          <p style={button}>Email</p>
          <Link to="/phonenumbers">
            <p style={button}>Phone</p>
          </Link>
        </>
      )}
    </Header>
  );
}
