import React, { useState } from "react";
import styled from "styled-components";

import ContactMeHeader from "../components/landing/ContactMeHeader";

import { headerHeight, footerHeight } from "./styling";
import FooterBanner from "../components/landing/FooterBanner";
import LandingInitialView from "../components/landing/LandingInitialView";
import LandingCaptions from "../components/landing/LandingCaptions";
import Boys from "../components/landing/Boys";
import SiteLinks from "../components/professional/SiteLinks";
import Projects from "../components/professional/Projects";

export default function Landing() {

  return (
    <>
      <ContactMeHeader />
      <FullPage >
        <LandingInitialView />
        <Projects />
        <SiteLinks backgroundColor={{backgroundColor: '#C7CCDB'}}/>
        <LandingCaptions />
        <Boys />
      </FullPage>
      <FooterBanner />
    </>
  );
}

const FullPage = styled.div`
  margin-top: ${headerHeight}px;
  margin-bottom: ${footerHeight}px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
