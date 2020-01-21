import React from "react";
import styled from "styled-components";

import ContactMeHeader from "../components/ContactMeHeader";

import { greyDark, headerHeight, footerHeight } from "./styling";
import FooterBanner from "../components/FooterBanner";
import LandingInitialView from "../components/LandingInitialView";
import LandingCaptions from "../components/LandingCaptions";

export default function Landing() {

  return (
    <>
      <ContactMeHeader />
      <FullPage>
        {/* <Contact style={ hidden ? null : openDiv }>
          <h5>Phone Numbers</h5>
          <h5>eMail</h5>
        </Contact> */}
        <LandingInitialView />
        <LandingCaptions />
        <h2 style={hstyle} >... and dedicated Father of three awesome boys!</h2>
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

const hstyle = {
    color: 'white',
    fontWeight: 'bold',
    width: '100%',
    padding: '100px 50px',
    backgroundColor: 'green'
}

// const Contact = styled.div`
// background-color: black
// height: 0px
// overflow: hidden
// `

// const openDiv = {
//   height: "55px"
// };