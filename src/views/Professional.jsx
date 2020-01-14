import React, { useState } from "react";
import styled from "styled-components";

import { appColor, color, width } from "./styling";
import { experience } from "../data/experience";

import NameHeader from "../components/NameHeader";
import ContentButtons from "../components/ContentButtons";
import MainContent from "../components/MainContent";
import Footer from '../components/Footer'

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");

  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <StyledProfessional>
      <NameHeader />
      <ContentButtons
        setContent={setContent}
        selected={selected}
        setSelected={setSelected}
      />
      <MainContent content={content} setContent={setContent} />
      <Footer />
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  width: ${width}
  background-color: ${appColor}
  padding-bottom: 50px
  color: ${color}

  @media (min-height: 850px) {
    margin-top:100px
  }
`;
