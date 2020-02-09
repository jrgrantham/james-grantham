import React from "react";
import styled from "styled-components";

import { transition, borderRad } from "../../views/styling";

export default function LinkButton(props) {
  return <Button>{props.content}</Button>;
}

const Button = styled.h6`
  color: FloralWhite;
  font-weight: bold;
  background-color: #ff8d1e;
  padding: 1rem 3.6rem;
  border-radius: ${borderRad};
  transition: opacity ${transition};

  @media (pointer: fine) {
    &:hover {
      opacity: 0.75;
    }
  }
`;
