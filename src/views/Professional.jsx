import React, { useState } from "react";
import styled from "styled-components";

import { appColor, color, width } from "./styling";
import { experience } from "../data/experience";

import NameHeader from "../components/NameHeader";

import ContentButtons from "../components/ContentButtons";
import MainContent from "../components/MainContent";
import Footer from '../components/Footer'
import HiddenDiv from "../components/HiddenDiv";

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");
  const [hidden, setHidden] = useState(true)

  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <StyledProfessional>
      {/* <NameHeader /> */}
      <HiddenDiv hidden={hidden} setHidden={setHidden} />
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
  color: ${color}
  
  border: 1px solid red
  padding: 1.5rem 0.5rem

  @media (min-width: 550px) {
    padding: 1.5rem 1rem
  }

  @media (min-height: 850px) {
    margin-top:100px
  }
`;
