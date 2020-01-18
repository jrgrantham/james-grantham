import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./views/Landing";
import Professional from "./views/Professional";
import Login from "./views/Login";
import PhoneNumbers from "./views/PhoneNumbers";
import ContactForm from './views/ContactForm'

import { whiteOff, blackOff } from "./views/styling";

export default function App() {
  document.getElementById("root").style.height = "100%";

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  return (
    <StyledApp>
      <Route exact path="/" component={Landing} />
      <Route path="/professional" component={Professional} />
      <Route
        path="/login"
        render={props => (
          <Login
            {...props}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            setToken={setToken}
            setUser={setUser}
          />
        )}
      />
      <Route
        path="/phonenumbers"
        render={props => (
          <PhoneNumbers
            {...props}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            user={user}
            token={token}
            setToken={setToken}
          />
        )}
      />
      <Route
        path="/contact"
        render={props => (
          <ContactForm
            {...props}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            user={user}
            token={token}
            setToken={setToken}
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
  background-color: ${whiteOff}
  text-align: center;

  h1, h2, h3, h4, h5, h6, p, a {
    color: ${blackOff}
  }
`;
