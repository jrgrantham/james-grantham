import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./views/Landing";
import Professional from "./views/Professional";
import Login from "./views/Login";
import PhoneNumbers from "./views/PhoneNumbers";

function App() {

  document.getElementById("root").style.height = "100%";

  const [isLoading, setIsLoading] = useState(false);

  return (
    <StyledApp id="App" className="App">
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

export default App;

const StyledApp = styled.div`

  height: 100%
  max-width: 800px
  margin: auto
  border: 1px solid green
  padding: 10px

  text-align: center

  // @media (min-width: 1400px) {
  //   max-width: 1200px
  //   padding: 50px 200px
  //   border-left: 1px solid lightgrey
  //   border-right: 1px solid lightgrey
  // }

  h1 {
    font-size: 2.5rem
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.7rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  p {
    text-align: left;
    font-size: 1rem;
    padding: 0.5rem 0
  }
  a {
    text-decoration: none
  }
`;
