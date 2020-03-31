import React from "react";
import styled from "styled-components";
import { welcomeMessage, introduction } from "../../data/introduction";

export default function Introduction() {
  return (
    <Container>
      <h4>{welcomeMessage}</h4>
      {introduction.map((sentence, index) => (
        <p key={index}>{sentence}</p>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width 80%;
  margin-top: 60px;

  h4 {
    margin-bottom: 20px;
  }

  p {
    max-width: 90%;
    text-align: center;
    margin: 15px 0px;
  }
`;
