import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Landing() {
  return (
    <LandingStyle>
      <DisplayFlex>
        <h2>James Grantham</h2>
      </DisplayFlex>
      <DisplayFlex>
        <h4>Full-stack Web Developer</h4>
        <h4>Mechanical Engineer</h4>
      </DisplayFlex>
      <DisplayFlex>
        <Link to="/personal">Personal</Link>
        <Link to="/professional/work">Professional</Link>
      </DisplayFlex>
    </LandingStyle>
  );
}

const LandingStyle = styled.div`
  height: 100vh
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid red

  h1 {
    padding: 1rem 0
  }
  h4 {
    padding: 1rem 0
  }
  a {
    font-size: 1.5rem
    width: 8rem
    border: 2px solid lightblue
    border-radius: 8px
    padding: 1rem 3rem
    margin: 0.5rem 0

    &:hover {
      color: black;
      background-color: lightblue;
    }
  }
`;

const DisplayFlex = styled.div`
  margin: 1rem
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid red
`