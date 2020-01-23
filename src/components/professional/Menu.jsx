import React, { useState } from "react";
import styled from "styled-components";

import menu from "../../../src/images/menu.png";

import {
  professionalBack,
  professionalButton,
  professionalButtonHov,
  transition,
  mediaBreak,
  borderRad,
  professionalOuter
} from "../../views/styling";

// --------- naming of sections to be sorted within this section ---------

import { career } from "../../data/career";
import { experience } from "../../data/experience";
import { web } from "../../data/web";
import { personal } from "../../data/personal";

export default function ContentButtons(props) {
  const categoryButtons = ["Experience", "About me", "Time line", "Projects"];
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

  return (
    <ButtonContainer>
      <StyledMenuButton
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <h4>{hidden ? props.selected : "select..."}</h4>
        <ImageContainer>
          <img src={hidden ? menu : null} alt="" />
        </ImageContainer>
      </StyledMenuButton>

      <VerticalMenu style={hidden ? null : openDiv}>
        {categoryButtons.map((title, index) => (
          <StyledButton
            style={props.selected === title ? selectedStyle : null}
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
            style={props.selected === title ? selectedStyle : null}
            key={index}
            onClick={() => {
              setCategory(title, index);
            }}
          >
            <h5>{title}</h5>
          </StyledButton>
        ))}
      </HorizontalMenu>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div``;

const HorizontalMenu = styled.div`
  display: none;
  padding: 0.25rem 0.25rem 0.5rem 0.25rem;
  @media (min-width: ${mediaBreak}) {
    display: flex;
    justify-content: space-between;
  }
`;

const VerticalMenu = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
  height: 0px;
  width: 100%;
  transition: height ${transition};

  @media (min-width: ${mediaBreak}) {
    display: none;
  }
`;

const openDiv = {
  height: "207px"
};

const StyledMenuButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: ${professionalBack};
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  img {
    height: 30px;
  }

  @media (pointer:fine) {
    &:hover {
      background-color: ${professionalButton};
      transition: background-color ${transition};
    }
  }

  @media (min-width: ${mediaBreak}) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px;
  width: 30px;

  img {
    opacity: 0.15;
    height: 25px;
  }
`;

const StyledButton = styled.div`
  margin: 0.25rem 0.25rem 0 0.25rem;
  padding: 10px 0;
  background-color: ${professionalButton};
  border-radius: ${borderRad};
  cursor: pointer;
  width: 85%;

  @media (min-width: ${mediaBreak}) {
    width: 25%;
    background-color: ${professionalButton};
  }
  
  @media (pointer:fine) {
    &:hover {
      background-color: ${professionalButtonHov};
      transition: background-color ${transition};
    }
  }
`;

const selectedStyle = {
  backgroundColor: professionalOuter,
  border: `2px solid ${professionalButton}`
};
