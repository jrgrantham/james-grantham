import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  landingBoysBack,
  landingBoysButton,
  landingBoysMaxWidth,
  buttonBlue,
  transition,
  appColourDark,
  appColour,
} from "../../views/styling";

const content = "...and dedicated father to three awesome boys!";

export default function Boys() {
  return (
    <StyledBoys>
      <Link className="link" to="/phonenumbers">
        <h5 className="content">{content}</h5>
      </Link>
    </StyledBoys>
  );
}

const StyledBoys = styled.div`
  background-color: ${landingBoysBack};
  width: 100%;
  margin-top: 50px;

  .link {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .content {
    width: 80%;
    max-width: ${landingBoysMaxWidth};
    margin: 30px 30px;
    background-color: ${landingBoysButton};
    border-radius: 120px;
    color: ${appColourDark};
    padding: 20px 30px;
    transition: all ${transition}s;

    @media (pointer: fine) {
      &:hover {
        background: ${buttonBlue};
        /* color: ${appColour} */
      }
    }
  }
`;
