import React from "react";
import styled from "styled-components";

export default function SectionTitle(props) {
  return (
    <StyledTitle>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column
  justify-content: center;
  width: 100%;

  h2 {
    font-weight: bold;
    padding-top: 60px;

    @media (min-width: 800px) {
      font-size: 3rem;
    }
    @media (min-width: 1200px) {
      font-size: 4rem;
    }
  }

  p {
    padding: 10px;
    text-align: center;
    margin-bottom: 40px;
  }
`;