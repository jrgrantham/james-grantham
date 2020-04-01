import React from "react";
import styled from "styled-components";
import { welcomeMessage, introduction } from "../../data/introduction";

export default function Introduction() {
  return (
    <Container>
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
  margin-top: 60px;

  h4 {
    margin-bottom: 10px;
  }

  .contents {
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

  .section {
    width: 45%;
    margin: 25px 2.5% 0 2.5%;
    
    @media (max-width: 800px) {
      width: 100%
    }
    
    p {
      text-align: center;
      // border: 1px solid red;
    }
  }

  }

`;
