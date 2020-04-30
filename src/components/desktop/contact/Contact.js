import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import "./contact.css";
const Contact = () => {
  const [buttonText, setbuttonText] = useState("Submit");
  return (
    <Jumbotron className="contact">
    <a name ='contact'></a>
      <p className="contactText">
        If you would like to work with me, go ahead and send a message at{" "}
        <a className="email" href="mailto:andrewryanogle@gmail.com">
          andrewryanogle@gmail.com
        </a>
      </p>
      <p className="contactText">or contact me on social media</p>
      <div>
        <a className="icon" href="https://www.linkedin.com/in/andrew-ogle/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="icon" href="https://github.com/andrewogle">
        <i class="fab fa-github-square"></i>
        </a>
        <a className="icon" href="https://twitter.com/fullstackandrew">
        <i class="fab fa-twitter-square"></i>
        </a>
      </div>
    </Jumbotron>
  );
};

export default Contact;
