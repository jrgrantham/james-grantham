import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./views/Landing";
import Professional from "./views/Professional";
import Login from "./views/Login";
import PhoneNumbers from "./views/PhoneNumbers";

import { appColor, color } from "./views/styling";

export default function App() {
  document.getElementById("root").style.height = "100%";

  document.addEventListener(
    "touchstart",
    function addtouchclass(e) {
      // first time user touches the screen
      document.documentElement.classList.add("can-touch"); // add "can-touch" class to document root using classList API
      document.removeEventListener("touchstart", addtouchclass, false); // de-register touchstart event
    },
    false
  );

  const [isLoading, setIsLoading] = useState(false);

  return (
    <StyledApp>
      <Route exact path="/" component={Landing} />
      <Route path="/professional" component={Professional} />
      <Route
        path="/login"
        render={props => (
          <Login {...props} setIsLoading={setIsLoading} isLoading={isLoading} />
        )}
      />
      <Route
        path="/personal/phonenumbers"
        render={props => (
          <PhoneNumbers
            {...props}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        )}
      />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  max-width: 1000px
  min-height: 100%
  margin: auto
  display: flex
  justify-content: center
  background-color: ${appColor}
  text-align: center;
  // --------
  // border: 2px solid blue;

  h1, h2, h3, h4, h5, p, a {
    color: ${color}
  }
`;
