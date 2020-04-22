import React from "react";
import styled from "styled-components";

import { aboutmeWidth } from "../../views/styling";
import { previously } from '../../data/previously'

export default function Previously() {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding-top: 40px;

    p {
      text-align: center;
      max-width: ${aboutmeWidth}px;
      padding: 20px 20px 0px 20px;
    }
  `

  return (
    <Container>
      {previously.map((para, index) => {
        return <p key={index}>{para}</p>
      })}
    </Container>
  );
}
