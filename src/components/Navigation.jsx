import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { work } from "../data/work";
import { history } from "../data/history";
import { webDev } from "../data/webDev";

function setData(props, title) {
  if (title === 'Work') {
    console.log(title)
    props.setContent(work)
    console.log(props.content)
  } else if (title === 'History') {
    console.log(title)
    props.setContent(history)
    console.log(props.content)
  }
}

export default function Navigation(props) {
  const category = ["History", "Work", "Web-Dev"];
  return (
    <>
      <Link to="/">
        <StyledH3>James Grantham</StyledH3>
      </Link>

      <StyledNavigation>
        {category.map((title, index) => (
          <div
            key={index}
            onClick={() => {
              setData(props, title);
            }}
          >
            <h5>{title}</h5>
          </div>
        ))}
      </StyledNavigation>
    </>
  );
}

const StyledH3 = styled.h3`
  margin-top: 1rem;
`;

const StyledNavigation = styled.div`

  margin: 1rem
  display: flex
  justify-content: center
  // border: 1px solid red

  @media (max-width: 370px) {
    flex-direction: column;
  }

  .activeLink {
    background-color: lightblue;
    color: #252525
  }

  h5 {
    font-size: 1rem
    margin: 0.25rem 0.5rem
    min-width: 70px
    padding: .5rem .7rem
    border: 0.5px solid lightblue
    border-radius: 5px
    cursor: pointer
  
    @media (min-width: 550px) {
      margin: 0.25rem 2rem
      width: 120px
    }
  }
`;
