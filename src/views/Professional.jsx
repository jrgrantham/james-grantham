import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { work } from "../data/work";
import { history } from "../data/history";
import { webDev } from "../data/webDev";

export default function Professional() {
  const [content, setContent] = useState(work);
  const categoryButtons = ["History", "Work", "Web-Dev"];

  function setCategory(title) {
    if (title === "Work") {
      setContent(work);
    } else if (title === "History") {
      setContent(history);
    } else if (title === "Web-Dev") {
      setContent(webDev);
    }
  }

  function isExpanded(receivedSubject) {
    setContent(
      content.map(subject => {
        if (subject.title === receivedSubject) {
          return {
            ...subject,
            display: !subject.display
          };
        } else return subject;
      })
    );
  }

  return (
    <StyledProfessional>
      <Link to="/">
        <h3>James Grantham</h3>
      </Link>

      <StyledCategory>
        {categoryButtons.map((title, index) => (
          <div
            key={index}
            onClick={() => {
              setCategory(title);
            }}
          >
            <h5>{title}</h5>
          </div>
        ))}
      </StyledCategory>

      {content.map((subject, index) => (
        <MainContent
          key={index}
          onClick={e => {
            isExpanded(subject.title);
          }}
        >
          <h5>{subject.title}</h5>
          <p>
            {subject.introduction}
            {subject.display ? "" : ".."}
          </p>
          {subject.display ? (
            <div>
              {subject.contents.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </div>
          ) : (
            ""
          )}
        </MainContent>
      ))}
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
h3 {
  margin: 15px
}
`;
const StyledCategory = styled.div`
  display: flex
  flex-direction: column;

  @media (min-width: 370px) {
    flex-direction: row;
    justify-content: space-evenly
  }

  h5 {
    margin: 0.25rem 0.5rem
    padding: .5rem .7rem
    border: 0.5px solid lightblue
    border-radius: 5px
    cursor: pointer

    @media (min-width: 370px) {
      min-width: 80px
    }
  
    @media (min-width: 550px) {
      width: 120px
    }
  }
`;

const MainContent = styled.div`
  margin: 1rem 0.5rem
  padding: 0.5rem
  border: 0.5px solid lightblue
  border-radius: 5px
  cursor: pointer
`;
