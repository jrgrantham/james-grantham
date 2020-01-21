import React from "react";
import styled from "styled-components";

import ContactMeHeader from "../components/ContactMeHeader";

import { greyDark, headerHeight, footerHeight } from "./styling";
import FooterBanner from "../components/FooterBanner";
import LandingInitialView from "../components/LandingInitialView";
import LandingCaptions from "../components/LandingCaptions";
import Boys from "../components/Boys";

export default function Landing() {

  return (
    <>
      <ContactMeHeader />
      <FullPage>
        <LandingInitialView />
        <LandingCaptions />
        <Boys />
      </FullPage>
      <FooterBanner />
    </>
  );
}

const FullPage = styled.div`
  margin-top: ${headerHeight}px
  margin-bottom: ${footerHeight}px
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  // border: 10px solid ${greyDark}

`;