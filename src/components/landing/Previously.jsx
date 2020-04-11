import React from "react";
import styled from "styled-components";

import { professionalWidth } from "../../views/styling";

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
      max-width: ${professionalWidth}px;
      padding: 20px 20px 0px 20px;
    }
  `

  return (
    <Container>
      <p>Previously employed by integrity services, I have experience of risk assessments, fitness for service, integrity reviews and anomaly assessments. I am also proficient with maintenance management and risk based inspection systems.</p>
      <p>Looking for a developer with knowledge of pressure systems inspection? I may be a great fit for your team.</p>
    </Container>
  );
}
