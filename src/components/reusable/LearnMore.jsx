import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { learnMoreIntro, learnMoreButton } from "../../data/learnMore";
import LinkButton from "./LinkButton";

export default function LearnMore() {
  return (
    <Container>
      <p>{learnMoreIntro}</p>
      <Link to="/professional">
        <LinkButton content={learnMoreButton} />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width 100%;
  margin: 30px 0 60px 0;

  p {
    max-width: 90%;
    text-align: center;
    margin-bottom: 30px;
  }
`;
