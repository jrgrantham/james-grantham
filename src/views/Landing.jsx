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
        <Link to="/personal/phonenumbers">Personal</Link>
        <Link to="/professional">Professional</Link>
      </DisplayFlex>
    </LandingStyle>
  );
}

const LandingStyle = styled.div`
  // height: 80vh
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid red
  padding: 100px 0

  @media (min-width: 1000px) {
    margin: 100px 0
  }

  @media (min-width: 1200px) {
    margin: 100px 0
    border: 1px solid lightblue
    border-radius: 10px
  }

  h1 {
    padding: 1rem 0
  }
  h4 {
    padding: 1rem 0
  }
  a {
    font-size: 1.4rem
    width: 8rem
    border: 1px solid lightblue
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