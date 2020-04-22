import React from "react";
import styled from "styled-components";

import useDarkMode from "../../hooks/useDarkMode";
import { MenuArrow } from "./buttonStyles";
import {
  transition,
  aboutmeInnerPad,
  aboutmeButtonHov,
  mediaBreak,
  aboutmeButtonDark,
  aboutmeButton,
  aboutmeColor,
} from "../../views/styling";

export default function MainContent(props) {
  useDarkMode();

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
    <Container style={{marginTop: `${props.profHeaderHeight + 13}px`}} >
      {/* <div style={{ height: "100px" }} /> */}

      {props.content.map((article, index) => (
        <div
          className={
            article.display
              ? "article toggle darkmode selected"
              : "article toggle darkmode"
          }
          key={index}
          onClick={() => {
            isExpanded(article.title);
          }}
        >
          <div className="title">
            <h5>{article.title}</h5>
            <MenuArrow hidden={!article.display} />
          </div>
          <p>{article.introduction}</p>
          <StyledDetails style={article.display ? closedDetails : null}>
            {article.contents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </StyledDetails>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`

  width: 100%;

  .article {
    width: 100%;
    padding: ${aboutmeInnerPad};
    cursor: pointer;
    transition: background-color ${transition}s;

    @media (min-width: ${mediaBreak}) {
      padding-left: 20px;
      padding-right: 20px;
    }

    h5 {
      text-align: left;
      padding-bottom: 0.5rem;
      color: ${aboutmeColor}
      width: 100%;
    }
    
    p {
      padding-bottom: 0.5rem;
    }
    
    .title {
      // width: 100%;
      // position: sticky;
      display: flex;
      justify-content: space-between;
    }

    @media (pointer: fine) {
      &:hover {
        background-color: ${aboutmeButtonHov};
      }
    }
  }

  .article.selected {
    background-color: ${aboutmeButton};
  }

  .article.selected.darkmode {
    background-color: ${aboutmeButtonDark};
  }
`;

const StyledDetails = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: max-height ${transition}s;
`;

const closedDetails = {
  maxHeight: "2000px"
};
