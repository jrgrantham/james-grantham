import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import { professionalBack } from "./styling";
import { experience } from "../data/experience";

import Menu from "../components/professional/Menu";
import MainContent from "../components/professional/MainContent";
import Footer from "../components/professional/Footer";
import SiteLinks from "../components/professional/SiteLinks";

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");

  return (
    <StyledProfessional>
      <Route
        path="/professional"
        render={props => (
          <Menu
            {...props}
            setContent={setContent}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      />
      <Route
        exact path="/professional"
        render={props => (
          <MainContent
            {...props}
            content={content} 
            setContent={setContent}
          />
        )}
      />
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


  // @media (min-height: 850px) {
  //   padding-top: 50px
  //   margin: 50px 0
  // }
`;
