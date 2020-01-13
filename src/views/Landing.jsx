import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import james from "../../src/images/james.jpg";

import { appColor, backgroundColor, color } from "./styling";

export default function Landing() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

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
        <Link to="/personal/phonenumbers">
          <h5>Personal</h5>
        </Link>
        <Link to="/professional">
          <h5>Professional</h5>
        </Link>
      </div>
    </LandingStyle>
  );
}

const LandingStyle = styled.div`
  height: 600px
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  // --------
  // border: 1px solid red;

  div {
  // --------
  // border: 1px solid red
  }

  @media (min-width: 1000px) {
    // height: 100vh
    // padding: 200px
    // border-left: 1px solid ${color}
    // border-right: 1px solid ${color}

  }

  // @media (min-width: 1200px) {
  //   // margin: 100px 0
  //   border: 1px solid ${color}
  //   border-radius: 10px
  // }

  img {
    width: 300px
    border-radius: 10px
  }
  
  h2 {
    color: ${color}
    // --------
    // border: 1px solid red
  }

  h4 {
    color: ${color}
    padding: 1rem 0
  }

  h5 {
    color: ${color}
    margin: 0.5rem 0
    padding: 1rem 0
    font-size: 1.4rem
    min-width: 15rem
    border: 1px solid ${color}
    border-radius: 8px

    &:hover {
      color: ${backgroundColor};
      background-color: ${color};
    }
  }
`;
