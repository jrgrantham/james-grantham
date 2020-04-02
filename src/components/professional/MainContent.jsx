import React from "react";
import styled from "styled-components";

import useDarkMode from "../../hooks/useDarkMode";
import { MenuArrow } from "./buttonStyles";
import {
  transition,
  professionalInnerPad,
  professionalButtonHov,
  mediaBreak,
  professionalButtonDark,
  professionalButton,
  appColour,
  appColourDark,
  professionalBack,
  professionalBackDark
} from "../../views/styling";

export default function MainContent(props) {
  useDarkMode();

  let menuHeight = 0

  // useEffect(() => {
  //   menuHeight = document.getElementById("menu").clientHeight;
  // }, []);
  // console.log(menuHeight);
  
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
    <Container style={{marginTop: menuHeight}} >
      {props.content.map((article, index) => (
        <div
          className={
            article.display
              ? "article toggle darkmode selected"
              : "article toggle darkmode"
          }
          // style={article.display ? selectedStyle : null}
          key={index}
          onClick={e => {
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
    background-color: ${professionalBack};
    width: 100%;
    padding: ${professionalInnerPad};
    cursor: pointer;
    transition: background-color ${transition};

    .darkmode {
      background-color: ${professionalBackDark};
    }

    @media (min-width: ${mediaBreak}) {
      padding-left: 20px;
      padding-right: 20px;
    }

    h5 {
      text-align: left;
      padding-bottom: 0.5rem;
    }

    p {
      padding-bottom: 0.5rem;
    }

    .title {
      position: sticky;
      background-color: inherit;
      top: 0;
      display: flex;
      justify-content: space-between;
    }

    @media (pointer: fine) {
      &:hover {
        background-color: ${professionalButtonHov};
      }
    }
  }

  .article.selected {
    background-color: ${professionalButton};
  }

  .article.selected.darkmode {
    background-color: ${professionalButtonDark};
  }
`;

const StyledDetails = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: max-height ${transition};
`;

const closedDetails = {
  maxHeight: "2000px"
};

// const selectedStyle = {
//   // borderRadius: borderRad,
//   backgroundColor: professionalButtonDark
// };
