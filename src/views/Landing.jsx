import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ContactMeHeader from "../components/ContactMeHeader";
import jamesPhoto from "../../src/images/james.jpg";

import {
  transition,
  greyMedium,
  borderRad,
  blackOff,
  greyDark,
  width,
  headerHeight,
  footerHeight
} from "./styling";
import FooterBanner from "../components/FooterBanner";

export default function Landing() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <>
      <ContactMeHeader />
      <FullPage>
          <LandingContainer>
        <LandingContent>
            <h2>James Grantham</h2>
            <div className="img ">
              <img src={jamesPhoto} alt="" />
            </div>
            <div>
              <h4>Mechanical Engineer</h4>
              <p>turned</p>
              <h4>Full-stack Web Developer</h4>
            </div>
            <Link to="/professional">
              <h5>Further information</h5>
            </Link>
        </LandingContent>
          </LandingContainer>
      </FullPage>
      <FooterBanner />
    </>
  );
}

// window.onload = function() {
//   if (!window.location.hash) {
//     window.location = window.location + "#loaded";
//     window.location.reload();
//   }
// };

let vh = window.innerHeight < 630 ? 630 : window.innerHeight;
console.log(vh);

const FullPage = styled.div`
  margin-top: ${headerHeight}px
  margin-bottom: ${footerHeight}px
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  // border: 10px solid ${greyDark}
`;

const LandingContainer = styled.div`
  height: ${vh-headerHeight-footerHeight}px
  width: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 2px solid green
`

const LandingContent = styled.div`
  width: 100%
  height: ${vh-headerHeight-footerHeight}px
  min-height: 500px
  max-height: 800px
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  // border: 2px solid green

  div {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: center;
  }

  .img {
    width: 90%
    max-width: 800px
  }
  
  img {
    max-width: 100%
    max-height: 100%
    border-radius: ${borderRad}
  }

  h5 {
    padding: 1rem 0
    min-width: 15rem
    border: 1px solid ${blackOff}
    border-radius: ${borderRad}

    @media (pointer:fine) {
      &:hover {
        background-color: ${greyMedium};
        transition: background-color ${transition}
      }
    }
  }
`;
