import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Navigation from "./Navigation";
import Portfolio from './Portfolio'

import "./desktop.css";

const Desktop = () => {
  return (
    <div className="deskCon">
      <Navigation />
      <Jumbotron className="desktop">
        <h1 className="display-3 text-white">Hello!</h1>
        <p className="lead text-white">My name is Andrew, and I make cool stuff.</p>
        {/* <hr className="my-2" /> */}
      
        <p className="lead bottom-p">
          <Button className= "button" color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Portfolio/>
    </div>
  );
};

export default Desktop;
