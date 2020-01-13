import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import james from "../../src/images/james.jpg";

const color ='lightblue'
const background = '#303030'
const appColor = '#202020'

export default function Landing() {

  document.body.style.background = appColor;
  document.getElementById("root").style.background = appColor

  return (
    <LandingStyle>
      <div>
        <h2>James Grantham</h2>
      </div>
      <div>
        <img src={james} alt="" />
      </div>
      <div>
        <h4>Full-stack Web Developer</h4>
        <h4>Mechanical Engineer</h4>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/personal/phonenumbers">Personal</Link>
        <Link to="/professional">Professional</Link>
      </div>
    </LandingStyle>
  );
}

const LandingStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  // border: 1px solid red;
  height: 80vh

  @media (min-width: 1000px) {
    margin: 100px 0
  }

  @media (min-width: 1200px) {
    // margin: 100px 0
    border: 1px solid ${color}
    border-radius: 10px
  }

  img {
    width: 300px
    border-radius: 10px
  }
  
  h2 {
    // border: 1px solid red
  }

  h4 {
    margin: 1rem 0
    // border: 1px solid red
  }

  a {
    margin: 0.5rem 0
    font-size: 1.4rem
    padding: 1rem 3rem
    min-width: 15rem
    border: 1px solid ${color}
    border-radius: 8px

    &:hover {
      color: black;
      background-color: ${color};
    }
  }
`;
