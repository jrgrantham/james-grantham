import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { headerHeight, whiteOff, borderRad } from "../views/styling";

export default function ContactMeHeader(props) {
  const [hidden, setHidden] = useState(true);
  console.log(hidden);

  return (
    <Header>
      <Link to='/phonenumbers'>
        <h5
          style={contactMe}
          onClick={() => {
            setHidden(!hidden);
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }}
        >
          contact me
        </h5>
      </Link>
    </Header>
  );
}

const Header = styled.div`
  display: flex
  justify-content: flex-end
  align-items: center
  background-color: brown
  min-height: ${headerHeight}px
  width: 100vw
  max-width:  1000px
  position: fixed
  top: 0
`;

const contactMe = {
  cursor: "pointer",
  margin: "0 10px",
  border: `1px solid ${whiteOff}`,
  borderRadius: borderRad,
  color: whiteOff,
  padding: "0 10px"
};