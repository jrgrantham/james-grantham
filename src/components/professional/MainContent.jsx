import React from "react";
import styled from "styled-components";

import { MenuArrow } from "./buttonStyles";
import {
  transition,
  borderRad,
  professionalInnerPad,
  professionalButtonHov,
  mediaBreak,
  professionalBackDark,
  professionalButtonDark
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
          <div className='title'>
            <h5>{article.title}</h5>
            <MenuArrow hidden={!article.display} />
          </div>
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

  @media (min-width: ${mediaBreak}) {
    padding-left: 20px;
    padding-right: 20px;
  }

  h5 {
    text-align: left;
  }
  
  p {
    padding: 0.7rem 0;
  }

  .title {
    // position: -webkit-sticky; /* Safari */
    // position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
  }

  .darkmode {
    // background-color: ${professionalBackDark}
  }

  @media (pointer:fine) {
    &:hover {
      background-color: ${professionalButtonHov};
    }
  }
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
  backgroundColor: professionalButtonDark
};
