import React, {useEffect} from "react";
import styled from "styled-components";

import ContactMeHeader from "../components/landing/Header";

import { headerHeight, footerHeight } from "./styling";
import FooterBanner from "../components/landing/Footer";
import LandingInitialView from "../components/landing/InitialView";
import Captions from "../components/landing/Captions";
import Boys from "../components/landing/Boys";
import SiteLinks from "../components/reusable/SiteLinks";
import Projects from "../components/landing/Projects";
import Spacer from "../components/reusable/Spacer";
import LearnMore from "../components/reusable/LearnMore";
import Introduction from "../components/landing/Introduction";
import AnimatedLogos from "../components/landing/AnimatedLogos";
import AnimatedLogosOLD from "../components/landing/AnimatedLogosOLD";

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
        <Introduction />
        <AnimatedLogos />
        {/* <AnimatedLogosOLD /> */}
        <LearnMore />
        <Spacer />
        <Projects />
        <Spacer />
        <Captions />
        <Spacer />
        <SiteLinks />
        <LearnMore />
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
