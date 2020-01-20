import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import jamesPhoto from "../../src/images/james.jpg";

import { transition, greyMedium, borderRad, blackOff, greyDark } from "./styling";

export default function Landing() {
  // document.body.style.background = appColor;
  // document.getElementById("root").style.background = appColor;

  return (
    <Position>
      <Header>
        <Link to="/phonenumbers">
          <h5 style={contactMe} >contact me</h5>
        </Link>
      </Header>
      <Content id='content' >
        <h2>James Grantham</h2>
        <div className='img '>
          <img src={jamesPhoto} alt="" />
        </div>
        <div>
        	<h4>Mechanical Engineer</h4>
          <p>turned</p>
        	<h4>Full-stack Web Developer</h4>
        </div>
        <Link to="/professional">
          <h5>Further information</h5>
        </Link>
      </Content>
      <Footer></Footer>
    </Position>
  );
}

window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
  }
}

let vh = (window.innerHeight < 630) ? 630 : window.innerHeight
console.log(vh)

const Position = styled.div`
  width: 100%
  height: ${vh}px
  display: flex
  flex-direction: column
  justify-content: space-between
  // border: 10px solid ${greyDark}
`;

const Header = styled.div`
  background-color: brown
  width: 100%
`;

const contactMe = {
  textAlign: 'right',
  color: 'white',
  padding: '20px'
}

const Content = styled.div`
  // margin: 40px
  // padding: 30px 0
  height: 70vh
  min-height: 30rem
  max-height: 50rem
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  // border: 2px solid green

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .img {
    width: 90%
    // max-width: 700px
    min-height: 20px
    max-height: 30vh
    object-fit: contain
    
    // border: 5px solid red
  }
  
  img {
    max-width: 100%
    max-height: 100%
    border-radius: ${borderRad}
  }

  h5 {
    padding: 1rem 0
    min-width: 15rem
    border: 1px solid ${blackOff}
    border-radius: ${borderRad}

    @media (pointer:fine) {
      &:hover {
        background-color: ${greyMedium};
        transition: background-color ${transition}
      }
    }
  }

  h4 {
    // height: 80px
    // margin: 10px 0
  }
`;

const Footer = styled.div`
  background-color: brown;
  height: 10px
  // clip-path: polygon(
  //   0 0, /* left top */
  //   100% 80%, /* right top */
  //   100% 100%, /* right bottom */
  //   0 100% /* left bottom */
  // );
`;
