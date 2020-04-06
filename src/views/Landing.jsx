import React, { useEffect } from "react";
import styled from "styled-components";

import ContactMeHeader from "../components/landing/Header";

import { headerHeight, footerHeight } from "./styling";
import FooterBanner from "../components/landing/Footer";
import LandingInitialView from "../components/landing/InitialView";
import Captions from "../components/landing/Captions";
import Boys from "../components/landing/Boys";
import ContactMe from "../components/reusable/ContactMe";
import Projects from "../components/landing/Projects";
import Spacer from "../components/reusable/Spacer";
import LearnMore from "../components/reusable/LearnMore";
import Introduction from "../components/landing/Introduction";
import AnimatedLogos from "../components/landing/AnimatedLogos";
import { LinkButton } from "../components/reusable/Buttons";
import { learnMoreButton } from "../data/learnMore";

export default function Landing(props) {
  const {
    setContent,
    setSelected,
    showContactMe,
    setShowContactMe,
    aboutHeight,
    setAboutHeight,
    projectsHeight,
    setProjectsHeight,
    valuesHeight,
    setValuesHeight,
    contactHeight,
    setContactHeight,
  } = props;

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <ContactMeHeader
        aboutHeight={aboutHeight}
        setAboutHeight={setAboutHeight}
        projectsHeight={projectsHeight}
        setProjectsHeight={setProjectsHeight}
        valuesHeight={valuesHeight}
        setValuesHeight={setValuesHeight}
        contactHeight={contactHeight}
        setContactHeight={setContactHeight}
      />
      <FullPage>
        <LandingInitialView />
        {/* <Spacer /> */}
        <Introduction setContent={setContent} setSelected={setSelected} />
        <AnimatedLogos />
        {/* <AnimatedLogosOLD /> */}
        {/* <LearnMore /> */}
        <LinkButton content={'Learn more'} target="/professional" />
        <Spacer />
        <Projects />
        <Spacer />
        <Captions setContent={setContent} setSelected={setSelected} />
        <Spacer />
        <ContactMe
          showContactMe={showContactMe}
          setShowContactMe={setShowContactMe}
        />
        <LinkButton content={'Learn more'} target="/professional" />
        {/* <LearnMore /> */}
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
