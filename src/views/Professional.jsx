import React from "react";
import WorkExperience from "../components/Work";
import { Route, Link } from "react-router-dom";
import WebDev from "../components/WebDev";
import Background from "../components/History";
import Navigation from "../components/Navigation";

export default function Professional() {
  
  return (
    <>
      <Navigation />
      <Route path="/professional/work" component={WorkExperience}/>
      <Route path="/professional/web-development" component={WebDev}/>
      <Route path="/professional/Background" component={Background}/>
    </>
  );
}