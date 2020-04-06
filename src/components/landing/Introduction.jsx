import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { welcomeMessage, introduction } from "../../data/introduction";

import { buttonOrange, transition } from "../../views/styling";
import { timeLine } from "../../data/timeLine";
import { experience } from "../../data/experience";
import { values } from "../../data/values";
import { aboutMe } from "../../data/aboutMe";

export default function Introduction(props) {
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

  return (
    <Container id="about">
      <Link to='/professional' className='spacing'>
        <h4>{welcomeMessage}</h4>
      </Link>
      <div className="contents">
        {introduction.map((section, index) => (
          <Link
            className="section"
            key={index}
            to="/professional"
            onClick={() => {
              setCategory(section.section);
            }}
          >
            <h5>{section.title}</h5>
            <p>{section.content}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width 90%;

  .spacing {
    margin: 60px 0 0px 0;
  }

  h4 {
    font-weight: bold;
    transition: color ${transition};

    @media (pointer: fine) {
      &:hover {
        color: ${buttonOrange};
      }
    }
  }

  h5 {
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }

  .contents {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .section {
    transition: color ${transition};
    width: 45%;
    margin: 90px 2.5% 0px 2.5%;

    @media (max-width: 800px) {
      width: 100%
      margin: 40px 2.5% 0px 2.5%;
    }
    
    @media (pointer: fine) {
      &:hover {
        color: ${buttonOrange};
      }
    }
  }
`;
