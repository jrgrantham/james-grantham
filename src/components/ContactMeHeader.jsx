import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { headerHeight, whiteOff, borderRad, landingHeader } from "../views/styling";

export default function ContactMeHeader(props) {
  const [hidden, setHidden] = useState(true);

  const Header = styled.div`
    display: flex
    justify-content: ${hidden ? "flex-end" : "space-evenly"} 
    align-items: center
    background-color: ${landingHeader}
    min-height: ${headerHeight}px
    width: 100vw
    max-width:  1000px
    position: fixed
    top: 0
  `;

  const button = {
    cursor: "pointer",
    margin: "0 10px",
    minWidth: "80px",
    border: `1px solid ${whiteOff}`,
    borderRadius: borderRad,
    color: whiteOff,
    padding: "0 10px"
  };

  return (
    <Header>
      {hidden ? null : (
        <>
          <Link to="/phonenumbers">
            <h5 style={button}>Phone</h5>
          </Link>
          <div>
            <h5 style={button}>Email</h5>
          </div>
        </>
      )}
      <div>
        <h5
          style={button}
          onClick={() => {
            setHidden(!hidden);
          }}
        >
          {hidden ? "contact me" : "hide "}
        </h5>
      </div>
    </Header>
  );
}
