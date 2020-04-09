import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { headerHeight, startInDarkMode } from "../../views/styling";
import logo192 from "../../images/logo192.png";
import bulbWhite from "../../images/bulbWhite.png";
import bulbYellow from "../../images/bulbYellow.png";
import { Header, Rotate } from "./headerStyling";
import useDarkMode from "../../hooks/useDarkMode";

export default function ContactMeHeader(props) {
  const [darkMode, setDarkMode] = useDarkMode(startInDarkMode);
  const {
    aboutHeight,
    setAboutHeight,
    projectsHeight,
    setProjectsHeight,
    valuesHeight,
    setValuesHeight,
    contactHeight,
    setContactHeight,
  } = props;

  function getHeights() {
    setAboutHeight(
      document.getElementById("about").getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight
    );
    setProjectsHeight(
      document.getElementById("projects").getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight);
    setValuesHeight(
      document.getElementById("captions").getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight);
    setContactHeight(
      document.getElementById("contact").getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight);
  }

  useEffect(() => {
    getHeights();
    console.log('Landing Header: useeffect ran, no empty array');
  });

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
        <p onClick={() => scroll(0)} className="remove">
          Top
        </p>
        <p onClick={() => scroll(aboutHeight)}>About</p>
        <p onClick={() => scroll(projectsHeight)}>Projects</p>
        <p onClick={() => scroll(valuesHeight)}>Values</p>
        <p onClick={() => scroll(contactHeight)}>Contact</p>
      </div>
      <div onClick={setDarkMode} className="image bulb">
        <img
          src={darkMode ? bulbWhite : bulbYellow}
          alt="mode"
          style={{ padding: "3px" }}
        />
      </div>
    </Header>
  );
}
