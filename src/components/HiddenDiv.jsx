import React from "react";
import styled from "styled-components";

export default function HiddenDiv(props) {
  const { hidden, setHidden } = props;

  return (
    <div>
      <h2
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        test
      </h2>
      <StyledDiv style={hidden ? null : openDiv}>TEST</StyledDiv>
    </div>
  );
}

const StyledDiv = styled.div`
  background-color: red
  height: 0px;
  overflow: hidden;

  transition height 1s
`;

const openDiv = {
  height: "100px"
};
