import React, { useState } from "react";
import styled from "styled-components";

import { appColor, appColorHover, backgroundColor, backgroundColorHover, color, colorHover, accentColor, accentColorHover, transition } from "../views/styling";

import { career } from "../data/career";
import { experience } from "../data/experience";
import { web } from "../data/web";
import { personal } from "../data/personal";
// import HiddenDiv from "./HiddenDiv";

export default function ContentButtons(props) {
  const categoryButtons = ["Experience", "Career", "Web", "Personal"];
  const [hidden, setHidden] = useState(true);
  const menuButtonContent = props.selected;

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

  function ClosedMenuButtonText() {
    return (
      <>
        <h4>{menuButtonContent}</h4>
        <span style={{ fontSize: "0.8rem" }}>(click to change)</span>
      </>
    );
  }

  function OpenMenuButtonText() {
    return <h5>Please select...</h5>;
  }

  function ButtonDiv(props) {
    if (hidden) {
      return <ClosedMenuButtonText />;
    }
    return <OpenMenuButtonText />;
  }

  return (
    <ButtonContainer>
      <StyledMenuButton
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <ButtonDiv />
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
            <h5>
              {title}
            </h5>
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
            <h5>
              {title}
            </h5>
          </StyledButton>
        ))}
      </HorizontalMenu>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  margin-top: 12px
`;

const HorizontalMenu = styled.div`
  display: none
  
  @media (min-width: 650px) {
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

  @media (min-width: 650px) {
    display: none
  }

  `;

const openDiv = {
  height: "220px"
};

const StyledMenuButton = styled.div`
  margin: 0.25rem 0rem
  padding: 10px 0
  background-color: ${backgroundColor}
  border-radius: 10px
  width: 100%
  cursor: pointer
  overflow: hidden

  // border: 1px solid red

  @media (pointer:fine) {
    &:hover {
      background-color: ${backgroundColorHover};
      transition: background-color ${transition}
    }
  }

  @media (min-width: 650px) {
    display: none
  }
`;

const StyledButton = styled.div`
  margin: 0.25rem 0rem
  padding: 10px 0
  background-color: ${accentColor}
  border-radius: 10px
  cursor: pointer
  width: 100%

  // border: 1px solid red
  
  @media (pointer:fine) {
    &:hover {
      background-color: ${backgroundColorHover};
      transition: background-color ${transition}
    }
  }

  @media (min-width: 650px) {
    width: 23%
    background-color: ${backgroundColor}

  }
`;

const selectedStyle = {
  border: `1px solid ${color}`
};
