import React, { useEffect } from "react";
import styled from "styled-components";

import { professionalColor } from "./styling";
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
  } = props;

  useDarkMode();

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
  }, []);

  return (
    <StyledProfessional id="professional" className="toggle darkmode">
      <Name />
      <Menu
        setContent={setContent}
        selected={selected}
        setSelected={setSelected}
      />
      <MainContent content={content} setContent={setContent} />
      <ContactMe
        showContactMe={showContactMe}
        setShowContactMe={setShowContactMe}
      />
      <LinkButton target="/" color={professionalColor} content="Home Page" />
      {/* div to push the page up over the fixed footer */}
      <div style={{ height: "100px" }} />
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: ${professionalWidth};

  .footer {
    @media (max-width: ${mediaBreak}) {
      display: none;
    }
  }
`;
