import React from "react";
import styled from "styled-components";
import { footerHeight, landingFooter, landingInitial1 } from "../views/styling";

export default function FooterBanner(props) {
  return (
    <Footer>
      <p style={pstyle} >James Grantham</p>
    </Footer>
  );
}

const Footer = styled.div`
  background-color: ${landingFooter}
  height: ${footerHeight}px
  width: 100%
  max-width:  1000px
  position: fixed
  bottom: 0
`;

const pstyle = {
  padding: '6px 15px',
  color: landingInitial1,
  fontSize: '0.8rem'
}