import React, { useState } from "react";
import { personalInformation } from "./personalInformation";
import styled from "styled-components";

export default function Background() {
  const [data, setData] = useState(personalInformation);

  function isDisplayed(receivedSubject) {
    setData(
      data.map(subject => {
        if (subject.title === receivedSubject) {
          return {
            ...subject,
            display: !subject.display
          };
        } else return subject;
      })
    );
  }

  return (
    <div>
      <h2>Background</h2>
      {data.map((subject, index) => (
        <Component
          key={index}
          onClick={e => {
            isDisplayed(subject.title);
          }}
        >
          <h5>{subject.title}</h5>
          <Introduction
            subjetIntroduction={subject.introduction}
            subjectDisplay={subject.display}
          />
          <Article
            subjetContents={subject.contents}
            subjectDisplay={subject.display}
          />
        </Component>
      ))}
    </div>
  );
}

function Introduction(props) {
  const { subjetIntroduction, subjectDisplay } = props;
  const expand = subjectDisplay ? "" : "..";
  return (
    <div>
      <p>
        {subjetIntroduction}
        {expand}
      </p>
    </div>
  );
}

function Article(props) {
  const { subjetContents, subjectDisplay } = props;
  if (subjectDisplay) {
    return (
      <div>
        {subjetContents.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    );
  }
  return null;
}

const Component = styled.div`
  margin: 1rem
  padding: 1rem
  border: 1px solid lightblue
  border-radius: 5px
  cursor: pointer
`;
