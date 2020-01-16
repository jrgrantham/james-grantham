import React from "react";
import styled from "styled-components";

import arrowUp from "../../src/images/arrowUp.png";
import arrowDown from "../../src/images/arrowDown.png";

import {
  greyLight,
  greyMedium,
  transition,
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
          <StyledDetails style={article.display ? closedDetails : null}>
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
  padding: 0.5rem 1rem
  background-color: ${greyLight}
  cursor: pointer
  h5 {
    text-align: left
    padding: 0.5rem 0 0.25rem 0
  }

  @media (pointer:fine) {
    &:hover {
      background-color: ${greyMedium};
      transition: background-color ${transition}
    }
  }
`;

const StyledTitle = styled.div`
  display: flex
  justify-content: space-between
`;

const ImageContainer = styled.div`
  display: flex
  justify-content: center
  align-items: center
  min-height: 100%
  img {
    opacity: 0.08
    height: 25px
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
  // border: `1px solid ${blackOff}`
};
