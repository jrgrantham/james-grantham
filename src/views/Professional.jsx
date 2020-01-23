import React, { useState } from "react";
import styled from "styled-components";

import { width, professionalBack, borderRad, professionalOuter } from "./styling";
import { experience } from "../data/experience";

import NameHeader from "../components/professional/NameHeader";
import Menu from "../components/professional/Menu";
import MainContent from "../components/professional/MainContent";
import Footer from "../components/professional/Footer";

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");
  const [hidden, setHidden] = useState(true);

  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <StyledProfessional>
        <NameHeader hidden={hidden} setHidden={setHidden} />
      <StyledContent>
        <Menu
          setContent={setContent}
          selected={selected}
          setSelected={setSelected}
        />
        <MainContent content={content} setContent={setContent} />
      </StyledContent>
      <Footer />
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  width: ${width}
  background-color: ${professionalOuter}
  padding: 1.5rem 1rem

  @media (min-height: 850px) {
    margin-top:100px
  }
`;

const StyledContent = styled.div`
  background-color: ${professionalBack}
  border: 4px solid ${professionalBack}
  border-radius: ${borderRad}
  margin-top: 12px
  overflow: hidden
`