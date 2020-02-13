import React from "react";
import styled from "styled-components";
import { welcomeMessage, introduction} from '../../data/introduction';

export default function Introduction() {
  return (
    <Container>
      <h4>{welcomeMessage}</h4>
      <div></div>
      <p>{introduction}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width 80%;
  margin: 60px 0 20px 0;

  p {
    max-width: 90%;
    text-align: center;
    margin: 20px 10px;
  }
`;
