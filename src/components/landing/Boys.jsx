import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  landingBoysBack,
  landingBoysButton,
  landingBoysFont,
  landingBoysMaxWidth
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

  .link {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .content {
    width: 100%;
    max-width: ${landingBoysMaxWidth};
    margin: 20px 20px;
    background-color: ${landingBoysButton};
    border-radius: 120px;
    color: ${landingBoysFont};
    padding: 20px 30px;
  }
`;
