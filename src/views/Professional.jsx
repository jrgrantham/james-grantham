import React from "react";
import WorkExperience from "../components/WorkExperience";
import { Route } from "react-router-dom";
import WebDev from "../components/WebDev";
import Background from "../components/Background";
import Navigation from "../components/Navigation";

export default function Professional() {

  return (
    <>
      <h3>James Grantham</h3>
      <Navigation />
      <Route path="/professional/work" component={WorkExperience}/>
      <Route path="/professional/web-development" component={WebDev}/>
      <Route path="/professional/Background" component={Background}/>
    </>
  );
}