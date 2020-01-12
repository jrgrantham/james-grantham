import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { career } from "../data/career";
import { experience } from "../data/experience";
import { webDev } from "../data/webDev";

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");
  const categoryButtons = ["Career", "Experience", "Web-Dev"];

  function setCategory(title) {
    setSelected(title);

    if (title === "Career") {
      setContent(career);
    } else if (title === "Experience") {
      setContent(experience);
    } else if (title === "Web-Dev") {
      setContent(webDev);
    }
  }

  function isExpanded(receivedArticle) {
    setContent(
      content.map(article => {
        if (article.title === receivedArticle) {
          return {
            ...article,
            display: !article.display
          };
        } else return article;
      })
    );
  }

  return (
    <StyledProfessional>
      <Link to="/">
        <h3>James Grantham</h3>
      </Link>

      <ButtonContainer>
        {categoryButtons.map((title, index) => (
          <div
            key={index}
            onClick={() => {
              setCategory(title, index);
            }}
          >
            <h5 className={selected===title ? "selected" : null}>
              {title}
            </h5>
          </div>
        ))}
      </ButtonContainer>

      {content.map((article, index) => (
        <Article
          key={index}
          onClick={e => {
            isExpanded(article.title);
          }}
        >
          <h5>{article.title}</h5>
          <p>
            {article.introduction}
            {article.display ? "" : ".."}
          </p>
          {article.display ? (
            <div>
              {article.contents.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </div>
          ) : (
            ""
          )}
        </Article>
      ))}
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
margin-bottom: 50px
color: lightgrey

  h3 {
    color: lightgrey
    margin: 15px;
  }
`;
const ButtonContainer = styled.div`
  display: flex
  flex-direction: column;

  @media (min-width: 370px) {
    flex-direction: row;
    justify-content: space-evenly
  }

  .selected {
    border: 2px solid lightgrey
  }

  h5 {
    margin: 0.25rem 0.4rem
    padding: .5rem .7rem
    border: 0.5px solid lightgrey
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

const Article = styled.div`
  margin: 1rem 0.5rem
  padding: 0.5rem
  border: 0.5px solid lightgrey
  border-radius: 5px
  cursor: pointer

  @media (min-width: 550px) {
    margin: 1rem 1rem
    padding: 0.5rem 1rem
  }
`;
