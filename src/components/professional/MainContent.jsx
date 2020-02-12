import React from "react";
import styled from "styled-components";

import { MenuArrow } from "./buttonStyles";
import {
  professionalBack,
  professionalButton,
  transition,
  borderRad,
  professionalInnerPad,
  professionalButtonHov
} from "../../views/styling";

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
    <>
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
            <MenuArrow hidden={!article.display} />
          </StyledTitle>
          <p>{article.introduction}</p>
          <StyledDetails style={article.display ? closedDetails : null}>
            {article.contents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </StyledDetails>
        </Article>
      ))}
    </>
  );
}

const Article = styled.div`
  width: 100%;
  padding: ${professionalInnerPad};
  cursor: pointer;
  transition: background-color ${transition};

  h5 {
    text-align: left;
    // padding: 0.5rem 0 0.25rem 0;
  }
  
  p {
    padding: 0.7rem 0;
  }

  @media (pointer:fine) {
    &:hover {
      background-color: ${professionalButtonHov};
    }
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDetails = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: max-height ${transition};
`;

const closedDetails = {
  maxHeight: "1000px"
};

const selectedStyle = {
  borderRadius: borderRad,
  backgroundColor: professionalButton
};
