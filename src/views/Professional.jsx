import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { appColor, backgroundColor, color } from "./styling";

// import Footer from '../components/Footer'
import { career } from "../data/career";
import { experience } from "../data/experience";
import { web } from "../data/web";
import Footer from "../components/Footer";

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");
  const categoryButtons = ["Career", "Experience", "Web"];

  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  function setCategory(title) {
    setSelected(title);

    if (title === "Career") {
      setContent(career);
    } else if (title === "Experience") {
      setContent(experience);
    } else if (title === "Web") {
      setContent(web);
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
      <StyledHeader>
        <Link to="/">
          <h4>James Grantham</h4>
        </Link>
      </StyledHeader>
      <ButtonContainer>
        {categoryButtons.map((title, index) => (
          <StyledButton
            className={selected === title ? "selected" : null}
            key={index}
            onClick={() => {
              setCategory(title, index);
            }}
          >
            {title}
          </StyledButton>
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
            <>
              {article.contents.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </>
          ) : (
            ""
          )}
        </Article>
      ))}
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  background-color: ${appColor}
  padding-bottom: 50px
  color: ${color}
`;

const StyledHeader = styled.div`
  display: flex
  justify-content: center
  h4 {
    margin-top: 20px
    padding: 5px
    background-color: ${backgroundColor}
    color: ${color}
    border-radius: 10px
    width: 300px
`

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
  
  @media (min-width: 370px) {
    width: 32%
    max-width: 150px
  }
`;

const Article = styled.div`
  margin: 1rem 0.5rem
  padding: 0.5rem
  background-color: ${backgroundColor}
  // border: 0.5px solid ${color}
  border-radius: 10px
  cursor: pointer

  h5, p {
    background-color: ${backgroundColor}
  }

  @media (min-width: 550px) {
    margin: 1rem 1rem
    padding: 0.5rem 1rem
  }
`;
