import React, { useState } from "react";
import styled from "styled-components";

import ContactMeHeader from "../components/ContactMeHeader";

import { headerHeight, footerHeight } from "./styling";
import FooterBanner from "../components/FooterBanner";
import LandingInitialView from "../components/LandingInitialView";
import LandingCaptions from "../components/LandingCaptions";
import Boys from "../components/Boys";

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
`;
