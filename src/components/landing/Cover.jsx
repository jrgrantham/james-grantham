import React from "react";
import styled from "styled-components";

export default function Cover() {
  const stageWidth = 40;
  const stageHeight = 40;

  

  setTimeout(function () {}, 500);
  return (
    <Container>
      <div className="box">
        <h1>James Grantham</h1>
        <h4></h4>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  color: white;
  z-index: 1000;
  background-color: black;

  h1 {
    font-size: 8vw;
  }
  h4 {
    font-size: 2vw;
  }
  .box {
  }
`;
