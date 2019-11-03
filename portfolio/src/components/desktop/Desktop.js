import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Navigation from "./Navigation";

import "./desktop.css";

const Desktop = () => {
  return (
    <div>
      <Navigation />
      <Jumbotron className="desktop">
        <h1 className="display-3">Hello!</h1>
        <p className="lead">My name is Andrew, and I make cool stuff</p>
        <hr className="my-2" />
      
        <p className="lead bottom-p">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Desktop;
