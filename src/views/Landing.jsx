import React, { useState } from "react";
import styled from "styled-components";

import ContactMeHeader from "../components/landing/ContactMeHeader";

import { headerHeight, footerHeight } from "./styling";
import FooterBanner from "../components/landing/FooterBanner";
import LandingInitialView from "../components/landing/LandingInitialView";
import LandingCaptions from "../components/landing/LandingCaptions";
import Boys from "../components/landing/Boys";
import SiteLinks from "../components/professional/SiteLinks";

export default function Landing() {
  const [hiddenContact, setHiddenContact] = useState(true);

  return (
    <>
      <ContactMeHeader
        hiddenContact={hiddenContact}
        setHiddenContact={setHiddenContact}
      />
      <FullPage
        onClick={e => {
          setHiddenContact(true);
        }}
      >
        <LandingInitialView setHiddenContact={setHiddenContact} />
        <LandingCaptions />
        <SiteLinks style={{backgroundColor: '#C7CCDB'}}/>
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
