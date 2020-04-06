import React, { useEffect } from "react";
import styled from "styled-components";

import { professionalColor, appColourDark, appColour } from "./styling";
import useDarkMode from "../hooks/useDarkMode";

import Menu from "../components/professional/Menu";
import MainContent from "../components/professional/MainContent";
import ContactMe from "../components/reusable/ContactMe";

import { professionalWidth, mediaBreak } from "../views/styling";
import { LinkButton } from "../components/reusable/Buttons";
import Name from "../components/professional/Name";

export default function Professional(props) {
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
    console.log("Professional: useeffect ran");
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("scrollpadding").style.padding = "0";
      document.getElementById("scrollheight").style.maxHeight = "0";
    } else {
      document.getElementById("scrollpadding").style.padding = " 2rem 0 2rem 0";
      document.getElementById("scrollheight").style.maxHeight = "50px";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  // inside the function as needs access to dark mode to set the background
  const StyledProfessional = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: ${professionalWidth};

    .fixed {
      width: 100%;
      max-width: ${professionalWidth};
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
    <StyledProfessional id="professional" className="toggle darkmode">
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
      <LinkButton target="/" color={professionalColor} content="Home Page" />
      <div style={{ height: "100px" }} />
    </StyledProfessional>
  );
}
