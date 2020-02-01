import React from "react";
import styled from "styled-components";

export default function SectionTitle(props) {
  return (
    <StyledTitle>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column
  justify-content: center;
  width: 100%;

  h1 {
    font-weight: bold;
    padding-top: 60px;
  }

  p {
    padding: 10px;
    text-align: center;
    margin-bottom: 40px;
  }
`;
