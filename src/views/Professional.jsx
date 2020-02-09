import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import { professionalBack } from "./styling";
import { experience } from "../data/experience";

import Menu from "../components/professional/Menu";
import MainContent from "../components/professional/MainContent";
import Footer from "../components/professional/Footer";
import SiteLinks from "../components/reusable/SiteLinks";
import LinkButton from "../components/reusable/LinkButton";
import Spacer from "../components/reusable/Spacer";

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");

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
      <Menu
        setContent={setContent}
        selected={selected}
        setSelected={setSelected}
      />
      <MainContent content={content} setContent={setContent} />
      <Spacer />
      <SiteLinks />
      <Footer />
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  padding: 10px;
  background-color: ${professionalBack};
`;
