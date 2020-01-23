import React, { useState } from "react";
import styled from "styled-components";

import {
  professionalWidth,
  professionalBack,
  borderRad,
  professionalOuter
} from "./styling";
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
      {/* <PaddingTop /> */}
      {/* <NameHeader hidden={hidden} setHidden={setHidden} /> */}
      <Menu
        setContent={setContent}
        selected={selected}
        setSelected={setSelected}
      />
      <MainContent content={content} setContent={setContent} />
      {/* <PaddingBottom /> */}
      <Footer />
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  width: 100%
  padding: 10px
  background-color: ${professionalBack}

  // @media (min-height: 850px) {
  //   padding-top: 50px
  //   margin: 50px 0
  // }
`;

const PaddingBottom = styled.div`
  background-color: ${professionalBack};
  height: 10px;
  border-radius: 0 0 ${borderRad} ${borderRad};
`

const PaddingTop = styled.div`
  background-color: ${professionalBack};
  height: 10px;
  border-radius: ${borderRad} ${borderRad} 0 0;
`