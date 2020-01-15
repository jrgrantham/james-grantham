import React from "react";
import styled from "styled-components";

import { appColor, backgroundColor, color, transition } from "../views/styling";

import { career } from "../data/career";
import { experience } from "../data/experience";
import { web } from "../data/web";
import { personal } from "../data/personal";

export default function ContentButtons(props) {
  const categoryButtons = ["Career", "Experience", "Web", "Personal"];

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
      {categoryButtons.map((title, index) => (
        <StyledButton
          className={props.selected === title ? "selected" : null}
          key={index}
          onClick={() => {
            setCategory(title, index);
          }}
        >
          {title}
        </StyledButton>
      ))}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  background-color: ${appColor}
  margin: 1rem 0.5rem
  display: flex
  flex-direction: column

  .selected {
    border: 1px solid ${color}
  }
  
  @media (min-width: 370px) {
    flex-direction: row;
    justify-content: space-between
  }
  
  @media (min-width: 550px) {
    margin: 1rem 1rem
    justify-content: space-evenly
  }
`;

const StyledButton = styled.div`
  margin: 0.25rem 0
  padding: .5rem 0
  background-color: ${backgroundColor}
  // border: 0.5px solid ${color}
  border-radius: 10px
  cursor: pointer

  @media (pointer:fine) {
    &:hover {
      color: ${appColor};
      background-color: ${color};
      transition: background-color ${transition}
    }
  }

  @media (min-width: 370px) {
    width: 32%
    max-width: 150px
  }
`;