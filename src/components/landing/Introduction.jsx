import React from "react";
import styled from "styled-components";
import { welcomeMessage, introduction } from "../../data/introduction";

export default function Introduction() {
  return (
    <Container>
      <h4>{welcomeMessage}</h4>
      {/* <p>{introduction}</p> */}
      {introduction.map((sentence, index) => (
        <div key={index}>
          <p className="toggle darkmode">{sentence}</p>
        </div>
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

  p {
    max-width: 90%;
    text-align: center;
    margin: 20px 0px;
  }
`;
