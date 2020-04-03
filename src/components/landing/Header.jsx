import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { headerHeight } from "../../views/styling";
import logo192 from "../../images/logo192.png";
import bulbWhite from "../../images/bulbWhite.png";
import bulbYellow from "../../images/bulbYellow.png";
import { Header, Rotate } from "./headerStyling";
import useDarkMode from "../../hooks/useDarkMode";

export default function ContactMeHeader() {
  const [darkMode, setDarkMode] = useDarkMode(true);

  let about;
  let project;
  let captions;
  let contact;

  function getHeights() {
    about =
      document.getElementById("about").getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight;
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
  }, [darkMode]);

  function scroll(selectedDiv) {
    window.scroll({ top: selectedDiv, left: 0, behavior: "smooth" });
  }
  // console.log(darkMode);
  return (
    <Header>
      <Rotate className="image">
        <Link to="/phonenumbers" className="image">
          <img src={logo192} alt="logo" id="logo" />
        </Link>
      </Rotate>
      <div className="links">
        <p onClick={() => scroll(0)} className='remove'>Top</p>
        <p onClick={() => scroll(about)}>About</p>
        <p onClick={() => scroll(project)}>Projects</p>
        <p onClick={() => scroll(captions)}>Values</p>
        <p onClick={() => scroll(contact)}>Contact</p>
      </div>
      <div onClick={setDarkMode} className="image">
        <img
          src={darkMode ? bulbWhite : bulbYellow }
          alt="mode"
          style={{ padding: "3px" }}
        />
      </div>
    </Header>
  );
}
