import React, { useState } from "react";
import styled from "styled-components";

import { MenuBurger } from "./buttonStyles";
import useDarkMode from "../../hooks/useDarkMode";
import {
  aboutmeButton,
  aboutmeButtonDark,
  aboutmeButtonHov,
  transition,
  mediaBreak,
  borderRad,
  aboutmeInnerPad,
  aboutmeSelectedButtonDark,
  aboutmeSelectedButton,
  aboutmeColor,
  appColourDark,
} from "../../views/styling";

// --------- naming of sections to be sorted here ---------

import { timeLine } from "../../data/timeLine";
import { experience } from "../../data/experience";
import { values } from "../../data/values";
import { aboutMe } from "../../data/aboutMe";

export default function ContentButtons(props) {
  const [hidden, setHidden] = useState(true);
  useDarkMode();

  const categoryButtons = ["About me", "Time line", "Experience", "Values"];

  function setCategory(title) {
    props.setSelected(title);

    if (title === "Time line") {
      props.setContent(timeLine);
    } else if (title === "Experience") {
      props.setContent(experience);
    } else if (title === "Values") {
      props.setContent(values);
    } else if (title === "About me") {
      props.setContent(aboutMe);
    }
  }

  // --------- naming of sections to be sorted here ---------

  const openDivHeight = {
    height: `${categoryButtons.length * 4}rem`,
  };

  // const horizontalWidth = {
  //   width: `${100 / categoryButtons.length - 1}%`
  // };

  // const selectedHorizontal = {
  //   width: `${100 / categoryButtons.length - 1}%`,
  //   backgroundColor: darkMode
  //     ? aboutmeSelectedButtonDark
  //     : aboutmeSelectedButton
  //   // border: "none"
  // };

  // const selectedVertical = {
  //   backgroundColor: darkMode
  //     ? aboutmeSelectedButtonDark
  //     : aboutmeSelectedButton
  //   // border: `2px solid ${aboutmeButton}`
  // };

  function changeHidden() {
    setHidden(!hidden);
  }

  return (
    <Container id="menu" className="toggle darkmode sticky">
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
      <div id='horizontalMenu'>
        <p>
          Read the sections as they are or click to expand for further details
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-bottom: 10px;

  #horizontalMenu {
    max-height: 50px;
    overflow: hidden;
    transition: max-height ${transition}s
  }

  p {
    padding: 0 10px;

    @media (min-width: ${mediaBreak}) {
      padding: 0 20px;
    }
  }
`;

const HorizontalMenu = styled.div`
  display: none;
  padding: 8px 20px 20px 20px;

  .button.toggle {
    padding: 10px 0;
    background-color: ${aboutmeButton};
    transition: background-color ${transition}s;
    border-radius: ${borderRad}px;
    cursor: pointer;
    width: 85%;

    @media (min-width: ${mediaBreak}) {
      width: 24%;
    }

    @media (pointer: fine) {
      &:hover {
        background-color: ${aboutmeButtonHov};
      }
    }
  }

  .button.selected {
    background-color: ${aboutmeColor};
    color: ${appColourDark};
  }

  .button.darkmode {
    background-color: ${aboutmeButtonDark};
  }

  .button.darkmode.selected {
    background-color: ${aboutmeColor};
    @media (pointer: fine) {
      &:hover {
        background-color: ${aboutmeButtonHov};
      }
    }
  }

  @media (min-width: ${mediaBreak}) {
    display: flex;
    justify-content: space-between;
  }
`;

const CollapsingMenu = styled.div`
  h4 {
    color: ${aboutmeColor};
  }

  .hamburgerButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 ${aboutmeInnerPad} ${aboutmeInnerPad} ${aboutmeInnerPad};
    cursor: pointer;
    overflow: hidden;
    img {
      height: 30px;
    }

    @media (pointer: fine) {
      &:hover {
        background-color: ${aboutmeButtonHov};
        transition: background-color ${transition}s;
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
    transition: height ${transition}s;

    @media (min-width: ${mediaBreak}) {
      display: none;
    }

    .button.toggle {
      padding: 10px 0;
      background-color: ${aboutmeButton};
      border-radius: ${borderRad}px;
      cursor: pointer;
      width: 85%;

      @media (min-width: ${mediaBreak}) {
        width: 24%;
        background-color: ${aboutmeButton};
      }

      @media (pointer: fine) {
        &:hover {
          background-color: ${aboutmeButtonHov};
          transition: background-color ${transition}s;
        }
      }
    }
    .toggle.darkmode {
      background-color: ${aboutmeButtonDark};
    }

    .button.selected {
      background-color: ${aboutmeSelectedButton};
    }

    .button.darkmode.selected {
      background-color: ${aboutmeSelectedButtonDark};
    }
  }
`;
