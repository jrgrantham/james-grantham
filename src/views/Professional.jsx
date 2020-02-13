import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { professionalBack, professionalBackDark } from "./styling";
import { experience } from "../data/experience";
import useDarkMode from '../hooks/useDarkMode'

import Menu from "../components/professional/Menu";
import MainContent from "../components/professional/MainContent";
import Spacer from "../components/reusable/Spacer";
import DarkModeDiv from "../components/reusable/DarkModeDiv";

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");
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
      <StyledProfessional className='toggle darkmode'>
        {/* <DarkModeDiv /> */}
        <Menu
          setContent={setContent}
          selected={selected}
          setSelected={setSelected}
        />
        <MainContent content={content} setContent={setContent} />
        <Spacer />
        <div style={{height: '80px'}} />
      </StyledProfessional>
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  
  .toggle {
    max-width: 1000px;
    background-color: ${professionalBack};
  }

  .darkmode {
    background-color: ${professionalBackDark};
  }
`;
