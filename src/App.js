import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./views/Landing";
import Professional from './views/Professional'

function App() {
  return (
    <StyledApp className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/professional" component={Professional}/>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`

// display: flex
// flex-direction: column
max-width: 800px
margin: auto

text-align: center
color: lightblue

h1 {
  font-size: 2.5rem
}
h2 {
  font-size: 2rem;
}
h3 {
  margin: 1rem 1rem
  font-size: 1.7rem;
}
h4 {
  font-size: 1.4rem;
}
h5 {
  font-size: 1.2rem;
}
p {
  padding-top: 1rem;
  text-align: left;
}
a {
  font-size: 1rem;
  color: lightblue
  text-decoration: none
}
`;
