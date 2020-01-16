import React from "react";
import styled from "styled-components";

import {
  appColor,
  appColorHover,
  backgroundColor,
  backgroundColorHover,
  color,
  colorHover,
  accentColor,
  accentColorHover,
  transition
} from "../views/styling";

export default function MainContent(props) {
  function isExpanded(receivedArticle) {
    props.setContent(
      props.content.map(article => {
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
    <div>
      {props.content.map((article, index) => (
        <Article
          style={article.display ? selectedStyle : null}
          key={index}
          onClick={e => {
            isExpanded(article.title);
          }}
        >
          <h5>{article.title}</h5>
          <p>{article.introduction}</p>
          <StyledDetails style={article.display ? closedDetails : null}>
            {article.contents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </StyledDetails>
        </Article>
      ))}
    </div>
  );
}

const Article = styled.div`
  margin: 0.5rem 0
  padding: 0.5rem
  background-color: ${backgroundColor}
  // border: 0.5px solid ${color}
  border-radius: 10px
  cursor: pointer

  @media (pointer:fine) {
    &:hover {
      background-color: ${backgroundColorHover};
      transition: background-color ${transition}
    }
  }

  @media (min-width: 550px) {
    padding: 0.5rem 1rem
  }
`;

const StyledDetails = styled.div`

max-height: 0px
overflow: hidden
transition: max-height ${transition}
`;

const closedDetails = {
  maxHeight: "1000px"
};

const selectedStyle = {
  border: `1px solid ${color}`
};
