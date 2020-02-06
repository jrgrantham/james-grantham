import React, {useEffect} from "react";
import styled from "styled-components";

import ContactMeHeader from "../components/landing/ContactMeHeader";

import { headerHeight, footerHeight } from "./styling";
import FooterBanner from "../components/landing/FooterBanner";
import LandingInitialView from "../components/landing/LandingInitialView";
import LandingCaptions from "../components/landing/LandingCaptions";
import Boys from "../components/landing/Boys";
import SiteLinks from "../components/reusable/SiteLinks";
import Projects from "../components/landing/Projects";
import Spacer from "../components/landing/Spacer";

export default function Landing() {

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <ContactMeHeader />
      <FullPage>
        <LandingInitialView />
        <Spacer />
        <Projects />
        <Spacer />
        <LandingCaptions />
        <Spacer />
        <SiteLinks />
        {/* <Spacer /> */}
        <Boys />
      </FullPage>
      <FooterBanner />
    </>
  );
}

const FullPage = styled.div`
  margin-top: ${headerHeight}px;
  margin-bottom: ${footerHeight}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
