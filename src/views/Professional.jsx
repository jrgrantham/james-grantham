import React, { useEffect } from "react";
import styled from "styled-components";

import { professionalBack, professionalBackDark, mediaBreak } from "./styling";
import useDarkMode from "../hooks/useDarkMode";

import Menu from "../components/professional/Menu";
import MainContent from "../components/professional/MainContent";
import ContactMe from "../components/reusable/ContactMe";

export default function Professional(props) {
  const { content, setContent, selected, setSelected, showContactMe, setShowContactMe } = props;
  useDarkMode();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto"
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <StyledProfessional id="professional">
      <StyledProfessional className="toggle darkmode">
        <Menu
          setContent={setContent}
          selected={selected}
          setSelected={setSelected}
        />
        <MainContent content={content} setContent={setContent} />
        {/* div to push the page up over the fixed footer */}
        <ContactMe
          showContactMe={showContactMe}
          setShowContactMe={setShowContactMe}
        />
        <div style={{height: '50px'}} />
      </StyledProfessional>
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1000px;
  background-color: ${professionalBack};

  .footer {
    @media (max-width: ${mediaBreak}) {
        display: none;
    }
  }

  .darkmode {
    background-color: ${professionalBackDark};
  }
`;
