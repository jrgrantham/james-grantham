import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./views/Landing";
import Professional from "./views/Professional";
import Login from "./views/Login";
import PhoneNumbers from "./views/PhoneNumbers";
import ContactForm from './views/ContactForm'
import back from './images/background.png'


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
  background-image: url('${back}');
  background-repeat: repeat;
  width: 100%;
  // max-width: 1000px;
  min-height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  shadows: none;
  
  // a {
  //   color: black;
  // }
`;
