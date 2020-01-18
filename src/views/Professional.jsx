import React, { useState } from "react";
import styled from "styled-components";

import { whiteOff, blackOff, width, greyLight, borderRad } from "./styling";
import { experience } from "../data/experience";

import NameHeader from "../components/NameHeader";
import Menu from "../components/Menu";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

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
  background-color: ${whiteOff}
  color: ${blackOff}
  padding: 1.5rem 1rem

  @media (min-height: 850px) {
    margin-top:100px
  }
`;

const StyledContent = styled.div`
  background-color: ${greyLight}
  border: 4px solid ${greyLight}
  border-radius: ${borderRad}
  margin-top: 12px
  overflow: hidden
`