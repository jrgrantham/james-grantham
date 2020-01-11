import React, {useEffect, useState} from "react";
import WorkExperience from "../components/Work";
import { Route } from "react-router-dom";
import WebDev from "../components/WebDev";
import Background from "../components/History";
import Navigation from "../components/Navigation";

export default function Professional() {

  // const [componentData, setComponentData] = useState(window.location.pathname)

  // useEffect(() => {
  //   setComponentData(window.location.pathname)
  // })
  // console.log(componentData);
  
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