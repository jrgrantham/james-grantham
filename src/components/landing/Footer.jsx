import React from "react";
import styled from "styled-components";
import { footerHeight, landingFooter, landingHeaderFont, appWidth, mediaBreak } from "../../views/styling";

export default function FooterBanner(props) {
  return (
    <Footer>
      <p style={pstyle} >James Grantham</p>
      <p style={pstyle} className='slogan'>built with blood, sweat and beers in 2020</p>
    </Footer>
  );
}

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${landingFooter};
  height: ${footerHeight}px;
  width: 100%;
  max-width: ${appWidth}px;
  position: fixed;
  bottom: 0;

  @media (max-width: ${mediaBreak}) {
    justify-content: center;
  }

  .slogan {
    @media (max-width: ${mediaBreak}) {
      display: none
    }
  }
`;

const pstyle = {
  padding: '6px 15px 16px 15px',
  color: landingHeaderFont,
  fontSize: '0.8rem',
  textAlign: 'center',
}