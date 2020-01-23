import React, { useState } from "react";
import styled from "styled-components";

import { MenuBurger } from "./buttonStyles";

import {
  professionalBack,
  professionalButton,
  professionalButtonHov,
  transition,
  mediaBreak,
  borderRad,
  professionalInnerPad
} from "../../views/styling";

// --------- naming of sections to be sorted within this section ---------

import { career } from "../../data/career";
import { experience } from "../../data/experience";
import { web } from "../../data/web";
import { personal } from "../../data/personal";

export default function ContentButtons(props) {

  const categoryButtons = ["Experience", "About me", "Time line", "Projects"];

  const openDivHeight = {
    height: `${categoryButtons.length * 4}rem`
  };

  const horizontalWidth = {
    width: `${100 / categoryButtons.length - 1}%`
  }

  const selectedHorizontal = {
    width: `${100 / categoryButtons.length - 1}%`,
    backgroundColor: '#E3D8C7',
    border: `2px solid ${professionalButton}`
  }
  
  const selectedVertical = {
    backgroundColor: '#E3D8C7',
    border: `2px solid ${professionalButton}`
  };
  
  const [hidden, setHidden] = useState(true);

  function setCategory(title) {
    props.setSelected(title);

    if (title === "Time line") {
      props.setContent(career);
    } else if (title === "Experience") {
      props.setContent(experience);
    } else if (title === "Projects") {
      props.setContent(web);
    } else if (title === "About me") {
      props.setContent(personal);
    }
  }

  // --------- naming of sections to be sorted within this section ---------
  function changeHidden() {
    setHidden(!hidden);
  }

  return (
    <Container>
      <h2>James Grantham</h2>
      <StyledMenuButton onClick={() => changeHidden()}>
        <h4>{hidden ? props.selected : "select..."}</h4>
        <MenuBurger hidden={hidden} />
      </StyledMenuButton>

      <VerticalMenu style={hidden ? null : openDivHeight}>
        {categoryButtons.map((title, index) => (
          <StyledButton
            style={props.selected === title ? selectedVertical : null}
            key={index}
            onClick={() => {
              setCategory(title, index);
              setHidden(!hidden);
            }}
          >
            <h5>{title}</h5>
          </StyledButton>
        ))}
      </VerticalMenu>

      <HorizontalMenu>
        {categoryButtons.map((title, index) => (
          <StyledButton
            style={props.selected === title ? selectedHorizontal : horizontalWidth}
            key={index}
            onClick={() => {
              setCategory(title, index);
            }}
          >
            <h5>{title}</h5>
          </StyledButton>
        ))}
      </HorizontalMenu>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: ${professionalInnerPad};
  background-color: ${professionalBack};
  margin-bottom: 10px;

  h2 {
    font-weight: bold;
    padding-bottom: 1.5rem;
  }
`;

const HorizontalMenu = styled.div`
  display: none;
  @media (min-width: ${mediaBreak}) {
    display: flex;
    justify-content: space-between;
  }
`;

const VerticalMenu = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
  height: 0px;
  width: 100%;
  transition: height ${transition};

  @media (min-width: ${mediaBreak}) {
    display: none;
  }
`;

const StyledMenuButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${professionalBack};
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  img {
    height: 30px;
  }

  @media (pointer: fine) {
    &:hover {
      background-color: ${professionalButton};
      transition: background-color ${transition};
    }
  }

  @media (min-width: ${mediaBreak}) {
    display: none;
  }
`;

const StyledButton = styled.div`
  padding: 10px 0;
  background-color: ${professionalButton};
  border-radius: ${borderRad};
  cursor: pointer;
  width: 85%;

  @media (min-width: ${mediaBreak}) {
    width: 24%;
    background-color: ${professionalButton};
  }

  @media (pointer: fine) {
    &:hover {
      background-color: ${professionalButtonHov};
      transition: background-color ${transition};
    }
  }
`;
