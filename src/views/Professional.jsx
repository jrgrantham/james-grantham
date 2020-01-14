import React, { useState } from "react";
import styled from "styled-components";

import { appColor, color } from "./styling";

import { experience } from "../data/experience";
import NameHeader from "../components/professional/NameHeader";
import Buttons from "../components/professional/Buttons";
import MainContent from "../components/professional/MainContent"

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");

  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <StyledProfessional>
      <NameHeader />
      <Buttons setContent={setContent} selected={selected} setSelected={setSelected} />
      <MainContent content={content} setContent={setContent} />
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  background-color: ${appColor}
  padding-bottom: 50px
  color: ${color}
`;