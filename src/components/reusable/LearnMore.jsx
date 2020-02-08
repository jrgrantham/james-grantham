import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  transition,
  borderRad
} from "../../views/styling";
import { learnMoreIntro, learnMoreButton } from "../../data/learnMore";

export default function LearnMore() {
  return (
    <Captions>
      <p>{learnMoreIntro}</p>
      <Link to="/professional">
        <h6>{learnMoreButton}</h6>
      </Link>
    </Captions>
  );
}

const Captions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width 100%;

  h6 {
    color: FloralWhite;
    font-weight: bold;
    background-color: #ff8d1e;
    padding: 1rem 3.6rem;
    margin: 20px 0 50px 0;
    border-radius: ${borderRad};
    transition: opacity ${transition};

    @media (pointer: fine) {
      &:hover {
        opacity: 0.75;
      }
    }
  }

  p {
    text-align: center;
    padding: 10px 30px;
  }
`;