import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { work } from "../data/work";
import { history } from "../data/history";
import { webDev } from "../data/webDev";

export default function Professional() {
  const [content, setContent] = useState(work);
  const [selected, setSelected] = useState("Work");
  const categoryButtons = ["History", "Work", "Web-Dev"];

  function setCategory(title) {
    setSelected(title);

    if (title === "Work") {
      setContent(work);
    } else if (title === "History") {
      setContent(history);
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
  h3 {
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
    border: 2px solid lightblue
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

const Article = styled.div`
  margin: 1rem 0.5rem
  padding: 0.5rem
  border: 0.5px solid lightblue
  border-radius: 5px
  cursor: pointer
`;
