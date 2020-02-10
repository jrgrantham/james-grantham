import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  headerHeight} from "../../views/styling";
import logo192 from "../../images/logo192.png";
import bulbWhite from "../../images/bulbWhite.png";
import bulbYellow from "../../images/bulbYellow.png";
import { Header, Rotate } from "./headerStyling";

export default function ContactMeHeader() {
  let project;
  let captions;
  let contact;

  function getHeights() {
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
  }

  useEffect(() => {
    getHeights();
  }, []);

  function scroll(selectedDiv) {
    window.scroll({ top: selectedDiv, left: 0, behavior: "smooth" });
  }

  return (
    <Header>
      <Rotate className="image">
        <Link to="/phonenumbers" className="image">
          <img src={logo192} alt="logo" id="logo" />
        </Link>
      </Rotate>
      <div className="links">
        <p onClick={() => scroll(0)}>Top</p>
        <p onClick={() => scroll(project)}>Projects</p>
        <p onClick={() => scroll(captions)}>Values</p>
        <p onClick={() => scroll(contact)}>Contact</p>
      </div>
      <div className="image">
        <img src={bulbYellow} alt="mode" style={{padding: '3px'}} />
      </div>
    </Header>
  );
}
