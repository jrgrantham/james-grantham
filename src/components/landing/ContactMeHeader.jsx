import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  headerHeight,
  borderRad,
  landingHeader,
  landingInitial1,
  landingHeadFootOpacity,
} from "../../views/styling";

export default function ContactMeHeader(props) {
  const { hiddenContact, setHiddenContact } = props;

  const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${landingHeader};
    opacity: ${landingHeadFootOpacity};
    min-height: ${headerHeight}px;
    width: 100%;
    max-width: 1000px;
    position: fixed;
    top: 0;
    padding: 0 10px;
  `;

  const button = {
    cursor: "pointer",
    margin: "0 10px",
    minWidth: "90px",
    border: `1px solid ${landingInitial1}`,
    borderRadius: borderRad,
    color: landingInitial1,
    padding: "0 10px"
  };

  return (
    <Header
      onClick={e => {
        setHiddenContact(true);
      }}
    >
      {hiddenContact ? (
        <h5
          style={button}
          onClick={e => {
            e.stopPropagation();
            setHiddenContact(!hiddenContact);
          }}
        >
          {hiddenContact ? "contact me" : "hide "}
        </h5>
      ) : (
        <>
          <h5 style={button}>Email</h5>
          <Link to="/phonenumbers">
            <h5 style={button}>Phone</h5>
          </Link>
        </>
      )}
    </Header>
  );
}
