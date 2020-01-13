import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import Footer from '../components/Footer'
import { career } from "../data/career";
import { experience } from "../data/experience";
import { web } from "../data/web";

export default function Professional() {
  const [content, setContent] = useState(experience);
  const [selected, setSelected] = useState("Experience");
  const categoryButtons = ["Career", "Experience", "Web"];

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
      <Link to="/">
        <h3>James Grantham</h3>
      </Link>

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
      {/* <Footer /> */}
    </StyledProfessional>
  );
}

const StyledProfessional = styled.div`
  margin-bottom: 50px
  color: whitesmoke
  h3 {
    color: whitesmoke
    margin: 15px;
  }
`;
const ButtonContainer = styled.div`
  margin: 1rem 0.5rem
  display: flex
  flex-direction: column;
  // border: 0.5px solid whitesmoke
  // border-radius: 5px

  .selected {
    border: 0.5px solid whitesmoke
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
  background-color: #303030
  // border: 0.5px solid whitesmoke
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
  background-color: #303030
  // border: 0.5px solid whitesmoke
  border-radius: 10px
  cursor: pointer

  h5, p {
    background-color: #303030
  }

  @media (min-width: 550px) {
    margin: 1rem 1rem
    padding: 0.5rem 1rem
  }
`;
