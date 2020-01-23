import React, { useState } from "react";
import styled from "styled-components";

import { professionalBack } from "./styling";
import { experience } from "../data/experience";

import Menu from "../components/professional/Menu";
import MainContent from "../components/professional/MainContent";
import Footer from "../components/professional/Footer";

import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import SiteLinks from "../components/professional/SiteLinks";

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");

  return (
    <StyledProfessional>
      <Menu
        setContent={setContent}
        selected={selected}
        setSelected={setSelected}
      />
      <MainContent content={content} setContent={setContent} />
      <SiteLinks />
      <Footer />
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%
  padding: 10px;
  background-color: ${professionalBack};


  // @media (min-height: 850px) {
  //   padding-top: 50px
  //   margin: 50px 0
  // }
`;
