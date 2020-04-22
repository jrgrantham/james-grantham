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
import Introduction from "../components/landing/Introduction";
import AnimatedLogos from "../components/landing/AnimatedLogos";
import HireMe from "../components/landing/HireMe";
import { LinkButton } from "../components/reusable/Buttons";
import Previously from "../components/landing/Previously";

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
    console.log("Landing: useeffect ran, HAS empty array");
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
        <HireMe />
        <Introduction setContent={setContent} setSelected={setSelected} />
        <AnimatedLogos />
        <LinkButton content={"Learn more"} target="/aboutme" />
        <Spacer />
        <Projects />
        <LinkButton content="View all projects" target="projects" />
        <Spacer />
        <Captions setContent={setContent} setSelected={setSelected} />
        <Spacer />
        <Previously />
        <ContactMe
          showContactMe={showContactMe}
          setShowContactMe={setShowContactMe}
        />
        <LinkButton content={"Learn more"} target="/aboutme" />
        <Boys />
      </FullPage>
      <s id="horizontalMenu"></s>
      <s id="aboutmeName"></s>
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

  // s {
  //   padding: 1px;
  //   max-height: 1px;
  // }
`;
