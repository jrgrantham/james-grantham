import React from "react";
import styled from "styled-components";

import { learnMoreButton } from "../../data/learnMore";
import { LinkButton } from "./Buttons";

export default function LearnMore() {
  return (
    <Container>
      {/* <p>{learnMoreIntro}</p> */}
      <LinkButton content={learnMoreButton} target="/professional" />
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
