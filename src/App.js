import React, {useState} from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./views/Landing";
import Professional from './views/Professional'
import Login from './views/Login'
import PhoneNumbers from './views/PhoneNumbers'

function App() {

  const [isLoading, setIsLoading] = useState(false)

  // const location = window.location.pathname
  // console.log(location);
  
  return (
    <StyledApp className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/professional" component={Professional}/>
      <Route
        path='/login'
        render={props => <Login {...props}
        setIsLoading={setIsLoading} 
        isLoading={isLoading} />}
      />
      <Route 
        path="/personal/phonenumbers" 
        render={props => <PhoneNumbers {...props}
        setIsLoading={setIsLoading} 
        isLoading={isLoading} />}
      />
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
  color: lightblue
  text-decoration: none
}
`;
