import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { headerHeight, whiteOff } from "../views/styling";

export default function ContactMeHeader(props) {
  return (
    <Header>
      <Link to="/phonenumbers">
        <h5 style={contactMe} >contact me</h5>
      </Link>
    </Header>
  );
}

const Header = styled.div`
  display: flex
  justify-content: flex-end
  align-items: center
  background-color: brown
  height: ${headerHeight}px
  width: 100vw
  max-width:  1000px
  position: fixed
  top: 0
`;

const contactMe = {
  color: whiteOff,
  paddingRight: "20px"
};