import React from "react";
import { Jumbotron } from "reactstrap";
import MobileNav from './MobileNav'
import Portfolio from "../desktop/Portfolio";
import Comtact from "../desktop/contact/Contact";

const Mobile = () => {
  return (
    <div className="deskCon">
    <MobileNav />
    <Jumbotron className="desktop">
    <a name ='home'></a>
      <div class="clouds"></div>
      <h1 className="display-3 text-white">Hello!</h1>
      <p className="lead text-white">
        My name is Andrew, and I make cool stuff.
      </p>
    </Jumbotron>
    <Portfolio />
    <Comtact />
  </div>
  )
};

export default Mobile;