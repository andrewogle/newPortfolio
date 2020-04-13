import React from "react";
import { Jumbotron } from "reactstrap";
import Navigation from "./NavBar/Navigation";
import Portfolio from "./Portfolio";
import Comtact from "./contact/Contact";

import "./desktop.css";

const Desktop = () => {
  return (
    <div className="deskCon">
      <Navigation />
      <Jumbotron className="desktop">
        <div class="clouds"></div>
        <h1 className="display-3 text-white">Hello!</h1>
        <p className="lead text-white">
          My name is Andrew, and I make cool stuff.
        </p>
      </Jumbotron>
      <Portfolio />
      <Comtact />
    </div>
  );
};

export default Desktop;
