import React, { useState } from "react";
import styled from "styled-components";

import menu from "../../src/images/menu.png";

import {
  appColor,
  backgroundColor,
  backgroundColorHover,
  color,
  accentColor,
  transition,
  mediaBreak
} from "../views/styling";

import { career } from "../data/career";
import { experience } from "../data/experience";
import { web } from "../data/web";
import { personal } from "../data/personal";
// import HiddenDiv from "./HiddenDiv";

export default function ContentButtons(props) {
  const categoryButtons = ["Experience", "Career", "Web", "Personal"];
  const [hidden, setHidden] = useState(true);

  function setCategory(title) {
    props.setSelected(title);

    if (title === "Career") {
      props.setContent(career);
    } else if (title === "Experience") {
      props.setContent(experience);
    } else if (title === "Web") {
      props.setContent(web);
    } else if (title === "Personal") {
      props.setContent(personal);
    }
  }

  return (
    <ButtonContainer>
      <StyledMenuButton
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <ImageContainer></ImageContainer>
        <h4>{hidden ? props.selected : "Please select..."}</h4>
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

const ButtonContainer = styled.div`
  // margin-top: 12px;
`;

const HorizontalMenu = styled.div`
  display: none
  padding: 0.25rem 0.25rem 0 0.25rem
  @media (min-width: ${mediaBreak}) {
    display: flex
    justify-content: space-between
  }
`;

const VerticalMenu = styled.div`
  display: flex
  flex-direction: column
  overflow: hidden;
  justify-content: flex-start
  align-items: center
  background-color: ${appColor}
  height: 0px;
  width: 100%
  max-width: 700px
  transition: height ${transition}

  @media (min-width: ${mediaBreak}) {
    display: none
  }
`;

// once sorted make this bigger for txt size changes
const openDiv = {
  height: "205px"
};

const StyledMenuButton = styled.div`
  display: flex
  justify-content: space-between
  align-items: center
  // margin: 0.25rem 0rem
  padding: 10px 15px
  background-color: ${backgroundColor}
  // border-radius: 10px
  width: 100%
  cursor: pointer
  overflow: hidden
  img {
    height: 30px
  }

  // border: 1px solid red

  @media (pointer:fine) {
    &:hover {
      background-color: ${backgroundColorHover};
      transition: background-color ${transition}
    }
  }

  @media (min-width: ${mediaBreak}) {
    display: none
  }
`;

const ImageContainer = styled.div`
  display: flex
  justify-content: center
  align-items: center
  min-height: 30px
  width: 20px
  // border: 1px solid red
  img {
    height: 20px;
  }
`;

const StyledButton = styled.div`
  margin: 0.25rem 0.25rem 0 0.25rem
  padding: 10px 0
  background-color: ${backgroundColorHover}
  border-radius: 10px
  cursor: pointer
  width: 100%

  // border: 1px solid red

  @media (min-width: ${mediaBreak}) {
    width: 25%
    background-color: ${backgroundColorHover}
  }
  
  @media (pointer:fine) {
    &:hover {
      background-color: ${accentColor};
      transition: background-color ${transition}
    }
  }
`;

const selectedStyle = {
  backgroundColor: appColor,
  border: `1px solid ${backgroundColorHover}`
};
