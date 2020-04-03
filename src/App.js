import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./views/Landing";
import Professional from "./views/Professional";
import Login from "./views/Login";
import PhoneNumbers from "./views/PhoneNumbers";
import ContactForm from "./components/reusable/ContactForm";
import Projects from "./views/AllProjects";
import { fontColour, fontColourDarkMode, appWidth, appColour, appColourDark } from "./views/styling";
import { aboutMe } from "./data/aboutMe";


export default function App() {
  document.getElementById("root").style.height = "100%";

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [content, setContent] = useState(aboutMe);
  const [selected, setSelected] = useState("About me");
  const [showContactMe, setShowContactMe] = useState(false)

  return (
    <StyledApp>
      <div className="app toggle darkmode">
        {/* <Route exact path="/" component={Landing} /> */}
        <Route
          exact path="/"
          render={props => (
            <Landing
              {...props}
              content={content}
              setContent={setContent}
              selected={selected}
              setSelected={setSelected}
              showContactMe={showContactMe}
              setShowContactMe={setShowContactMe}
            />
          )}
        />
        <Route
          path="/professional"
          render={props => (
            <Professional
              {...props}
              content={content}
              setContent={setContent}
              selected={selected}
              setSelected={setSelected}
              showContactMe={showContactMe}
              setShowContactMe={setShowContactMe}
            />
          )}
        />
        <Route path="/projects" component={Projects} />
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
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: ${appWidth};
  min-height: 100%;
  margin: auto;
  
  .app {
    display: flex;
    justify-content: center;
    background-color: ${appColour};
    color: ${fontColour};
    text-align: center;
    width: 100%;
    min-height: 100%;
  }

  .app.darkmode {
    color: ${fontColourDarkMode};
    background-color: ${appColourDark};
  }

  @media (max-width: 1500px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2.5rem;
    }
    h4 {
      font-size: 2rem;
    }
    h5, h6 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      // font-size: 2rem;
    }
    h4 {
      font-size: 1.8rem;
    }
    h5, h6 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2.3rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    h5, h6 {
      font-size: 1.2rem;
    }
  }
`;
