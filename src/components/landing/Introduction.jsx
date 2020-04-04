import React from "react";
import styled from "styled-components";
import { welcomeMessage, introduction } from "../../data/introduction";
import { buttonOrange } from "../../views/styling";

export default function Introduction() {
  return (
    <Container id='about'>
      {/* <SectionTitle title={welcomeMessage} /> */}
      <h4>{welcomeMessage}</h4>
      <div className='contents'>
        {introduction.map((section, index) => (
          <div className='section' key={index}>
            <h5>{section.title}</h5>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width 90%;

  h4 {
    font-weight: bold;
    padding: 60px 0 0px 0;
    // color: ${buttonOrange}
  }

  .contents {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

  .section {
    width: 45%;
    margin: 40px 2.5% 0px 2.5%;

    @media (max-width: 800px) {
      width: 100%
    }

    h5 {
      margin-bottom: 10px;
    }

    p {
      text-align: center;
      // border: 1px solid red;
      // @media (min-width: 1000px) {
      //   text-align: justify;
      // }
    }
  }

  }

`;
