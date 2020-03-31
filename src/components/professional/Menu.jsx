import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MenuBurger } from "./buttonStyles";
import useDarkMode from "../../hooks/useDarkMode";
import {
  professionalButton,
  professionalButtonDark,
  professionalButtonHov,
  transition,
  mediaBreak,
  borderRad,
  professionalInnerPad,
  professionalSelectedButtonDark,
  professionalSelectedButton
} from "../../views/styling";

// --------- naming of sections to be sorted here ---------

import { timeLine } from "../../data/timeLine";
import { experience } from "../../data/experience";
import { values } from "../../data/values";
import { aboutMe } from "../../data/aboutMe";

export default function ContentButtons(props) {
  const [hidden, setHidden] = useState(true);
  useDarkMode();

  const categoryButtons = ["Experience", "About me", "Time line", "Projects"];

  function setCategory(title) {
    props.setSelected(title);

    if (title === "Time line") {
      props.setContent(timeLine);
    } else if (title === "Experience") {
      props.setContent(experience);
    } else if (title === "Projects") {
      props.setContent(values);
    } else if (title === "About me") {
      props.setContent(aboutMe);
    }
  }

  // --------- naming of sections to be sorted here ---------

  const openDivHeight = {
    height: `${categoryButtons.length * 4}rem`
  };

  // const horizontalWidth = {
  //   width: `${100 / categoryButtons.length - 1}%`
  // };

  // const selectedHorizontal = {
  //   width: `${100 / categoryButtons.length - 1}%`,
  //   backgroundColor: darkMode
  //     ? professionalSelectedButtonDark
  //     : professionalSelectedButton
  //   // border: "none"
  // };

  // const selectedVertical = {
  //   backgroundColor: darkMode
  //     ? professionalSelectedButtonDark
  //     : professionalSelectedButton
  //   // border: `2px solid ${professionalButton}`
  // };

  function changeHidden() {
    setHidden(!hidden);
  }

  return (
    <Container id='menu' className="toggle darkmode">
      <Link to='/'><h2>James Grantham</h2></Link>

      <CollapsingMenu>
        <div className="hamburgerButton" onClick={() => changeHidden()}>
          <h4>{hidden ? props.selected : "select..."}</h4>
          <MenuBurger hidden={hidden} />
        </div>
        <div className="verticalButtons" style={hidden ? null : openDivHeight}>
          {categoryButtons.map((title, index) => (
            <div
              className={
                props.selected === title
                  ? "button toggle darkmode selected"
                  : "button toggle darkmode"
              }
              key={index}
              onClick={() => {
                setCategory(title, index);
                setHidden(!hidden);
              }}
            >
              <h5>{title}</h5>
            </div>
          ))}
        </div>
      </CollapsingMenu>

      <HorizontalMenu>
        {categoryButtons.map((title, index) => (
          <div
            className={
              props.selected === title
                ? "button toggle darkmode selected"
                : "button toggle darkmode"
            }
            key={index}
            onClick={() => {
              setCategory(title, index);
            }}
          >
            <h5>{title}</h5>
          </div>
        ))}
      </HorizontalMenu>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
  // position: fixed;

  h2 {
    font-weight: bold;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    cursor: pointer;
    color: floralwhite;

    @media (pointer: fine) {
      &:hover {
        color: ${professionalButtonHov};
      }
    }
  }
`;

const HorizontalMenu = styled.div`
  display: none;
  padding: 20px;

  .button.toggle {
    padding: 10px 0;
    background-color: ${professionalButton};
    transition: background-color ${transition};
    border-radius: ${borderRad};
    cursor: pointer;
    width: 85%;

    @media (min-width: ${mediaBreak}) {
      width: 24%;
    }

    @media (pointer: fine) {
      &:hover {
        background-color: ${professionalButtonHov};
      }
    }
  }

  .button.selected {
    background-color: ${professionalSelectedButton};
  }

  .button.darkmode {
    background-color: ${professionalButtonDark};
  }

  .button.darkmode.selected {
    background-color: ${professionalSelectedButtonDark};
  }

  @media (min-width: ${mediaBreak}) {
    display: flex;
    justify-content: space-between;
  }
`;

const CollapsingMenu = styled.div`
  .hamburgerButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${professionalInnerPad};
    cursor: pointer;
    overflow: hidden;
    img {
      height: 30px;
    }

    @media (pointer: fine) {
      &:hover {
        background-color: ${professionalButtonHov};
        transition: background-color ${transition};
      }
    }

    @media (min-width: ${mediaBreak}) {
      display: none;
    }
  }

  .verticalButtons {
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

    .button.toggle {
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
    }
    .toggle.darkmode {
      background-color: ${professionalButtonDark};
    }

    .button.selected {
      background-color: ${professionalSelectedButton};
    }

    .button.darkmode.selected {
      background-color: ${professionalSelectedButtonDark};
    }
  }
`;
