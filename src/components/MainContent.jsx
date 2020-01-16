import React from "react";
import styled from "styled-components";

import arrowUp from "../../src/images/arrowUp.png";
import arrowDown from "../../src/images/arrowDown.png";

import {
  backgroundColor,
  backgroundColorHover,
  color,
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
    <Container>
      {props.content.map((article, index) => (
        <Article
          style={article.display ? selectedStyle : null}
          key={index}
          onClick={e => {
            isExpanded(article.title);
          }}
        >
          <StyledTitle>
            <h5>{article.title}</h5>
            <ImageContainer>
              <img src={ article.display ? arrowUp : arrowDown } alt="" />
            </ImageContainer>
          </StyledTitle>
          <p>{article.introduction}</p>
          <StyledDetails style={!article.display ? closedDetails : null}>
            {article.contents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </StyledDetails>
        </Article>
      ))}
    </Container>
  );
}

const Container = styled.div`
`;

const Article = styled.div`
  // margin: 0.5rem 0
  padding: 0.5rem 1rem
  background-color: ${backgroundColor}
  // border: 0.5px solid ${color}
  // border-radius: 10px
  cursor: pointer
  h5 {
    text-align: left
    padding: 0.5rem 0 0.25rem 0
  }

  @media (pointer:fine) {
    &:hover {
      background-color: ${backgroundColorHover};
      transition: background-color ${transition}
    }
  }

  // @media (min-width: 550px) {
  //   padding: 0.5rem 1rem
  // }
`;

const StyledTitle = styled.div`
  display: flex
  justify-content: space-between
  // border: 1px solid red

`;

const ImageContainer = styled.div`
  display: flex
  justify-content: center
  align-items: center
  min-height: 100%
  // border: 1px solid red
  img {
    opacity: 0.25
    height: 15px
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
  // border: `1px solid ${color}`
};
