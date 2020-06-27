import React, { useEffect } from "react";
import styled from "styled-components";

import { aboutmeColor, appColourDark, appColour } from "./styling";
import useDarkMode from "../hooks/useDarkMode";

import Menu from "../components/aboutme/Menu";
import MainContent from "../components/aboutme/MainContent";
import ContactMe from "../components/reusable/ContactMe";

import { aboutmeWidth, mediaBreak } from "./styling";
import { LinkButton } from "../components/reusable/Buttons";
import Name from "../components/aboutme/Name";

export default function AboutMe(props) {
  const {
    content,
    setContent,
    selected,
    setSelected,
    showContactMe,
    setShowContactMe,
    profHeaderHeight,
    setProfHeaderHeight,
  } = props;

  const [darkMode] = useDarkMode(true);

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("aboutmeName").style.padding = "0";
      document.getElementById("horizontalMenu").style.maxHeight = "0";
    } else {
      document.getElementById("aboutmeName").style.padding = " 2rem 0 2rem 0";
      document.getElementById("horizontalMenu").style.maxHeight = "50px";
    }
  }

  window.onscroll = function () {
    if (document.getElementById("aboutmeName") && document.getElementById("horizontalMenu")) {
      scrollFunction();
    }
  };

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
    setProfHeaderHeight(document.getElementById("fixedHeader").offsetHeight);
    console.log("Landing Header: useeffect ran, HAS empty array");
    // needs to be empty array to prevent scroll
    // changing state on selection of mail or content
    // causes window scroll to run and move the page
    return () => {};
  }, []);

  // inside the function as needs access to dark mode to set the background
  const Styledaboutme = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: ${aboutmeWidth}px;

    .fixed {
      /* z-index: ; */
      width: 100%;
      max-width: ${aboutmeWidth}px;
      position: fixed;
      background: ${darkMode ? appColourDark : appColour};
    }

    .footer {
      @media (max-width: ${mediaBreak}) {
        display: none;
      }
    }
  `;

  return (
    <Styledaboutme id="aboutme" className="toggle darkmode">
      <div id="fixedHeader" className="fixed toggle darkmode">
        <Name />
        <Menu
          setContent={setContent}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <MainContent
        content={content}
        setContent={setContent}
        profHeaderHeight={profHeaderHeight}
      />
      <ContactMe
        showContactMe={showContactMe}
        setShowContactMe={setShowContactMe}
      />
      <LinkButton target="/" color={aboutmeColor} content="Home Page" />
      {/* <div style={{ height: "100px" }} /> */}
    </Styledaboutme>
  );
}
