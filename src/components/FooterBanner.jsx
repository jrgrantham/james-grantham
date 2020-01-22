import React from "react";
import styled from "styled-components";
import { footerHeight, landingFooter } from "../views/styling";

export default function FooterBanner(props) {
  return <Footer></Footer>;
}

const Footer = styled.div`
  background-color: ${landingFooter}
  height: ${footerHeight}px
  width: 100vw
  max-width:  1000px
  position: fixed
  bottom: 0

  // clip-path: polygon(
  //   0 0, /* left top */
  //   100% 100%, /* right top */
  //   100% 100%, /* right bottom */
  //   0 100% /* left bottom */
  // );
`;
