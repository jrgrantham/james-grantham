import React, { useState } from "react";
import styled from "styled-components";

import menu from "../../src/images/menu.png";

import {
  whiteOff,
  greyLight,
  greyMedium,
  greyDark,
  orangeMedium,
  transition,
  mediaBreak,
  borderRad
} from "../views/styling";

import { career } from "../data/career";
import { experience } from "../data/experience";
import { web } from "../data/web";
import { personal } from "../data/personal";

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
        <ImageContainer>
          {/* <img src={hidden ? arrowDown : arrowUp} alt="" /> */}
        </ImageContainer>
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

const ButtonContainer = styled.div`
`;

const HorizontalMenu = styled.div`
  display: none
  padding: 0.25rem 0.25rem 0.5rem 0.25rem
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
  background-color: ${whiteOff}
  height: 0px;
  width: 100%
  max-width: 700px
  transition: height ${transition}

  @media (min-width: ${mediaBreak}) {
    display: none
  }
`;

const openDiv = {
  height: "207px"
};

const StyledMenuButton = styled.div`
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px 15px
  background-color: ${greyLight}
  width: 100%
  cursor: pointer
  overflow: hidden
  img {
    height: 30px
  }

  @media (pointer:fine) {
    &:hover {
      background-color: ${greyMedium};
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
  width: 30px

  img {
    opacity: 0.15
    height: 25px;
  }
`;

const StyledButton = styled.div`
  margin: 0.25rem 0.25rem 0 0.25rem
  padding: 10px 0
  background-color: ${greyMedium}
  border-radius: ${borderRad}
  cursor: pointer
  width: 50%

  @media (min-width: ${mediaBreak}) {
    width: 25%
    background-color: ${greyMedium}
  }
  
  @media (pointer:fine) {
    &:hover {
      background-color: ${orangeMedium};
      transition: background-color ${transition}
    }
  }
`;

const selectedStyle = {
  backgroundColor: whiteOff,
  border: `1px solid ${greyDark}`
};
