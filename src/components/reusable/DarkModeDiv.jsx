import React from "react";
import styled from "styled-components";

import bulbWhite from "../../images/bulbWhite.png";
import bulbYellow from "../../images/bulbYellow.png";

import useDarkMode from "../../hooks/useDarkMode";

export default function DarkModeDiv() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <Container>
      <div onClick={setDarkMode} className="image">
        <img
          src={darkMode ? bulbWhite : bulbYellow}
          alt="mode"
          style={{ padding: "3px" }}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .image {
    height: 25px;
    width: 25px;
    // border: 1px solid red

    img {
      cursor: pointer;
      max-height: 100%;
      width: auto;
      transition: all 1s;
    }
  }
`;
