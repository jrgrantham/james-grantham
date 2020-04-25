import React from "react";
import styled from "styled-components";
import { button } from "../../data/introduction";

import {
  buttonOrange,
  transition,
  appColourDark,
  borderRad,
} from "../../views/styling";

export default function HireMe() {
  return (
    <Container>
      <p
        className="test"
        onClick={() => {
          window.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
      >
        {button}
      </p>
    </Container>
  );
}

const Container = styled.div`
  font-weight: bold;
  background-color: ${buttonOrange};
  padding: 1rem 3.6rem;
  border-radius: ${borderRad}px;
  transition: all ${transition}s;
  margin: 50px 0;
  cursor: pointer;

  .test {
    color: ${appColourDark};
  }

  @media (pointer: fine) {
    &:hover {
      transform: scale(1.1);
      border-radius: ${borderRad * 3}px;
    }
  }
`;
