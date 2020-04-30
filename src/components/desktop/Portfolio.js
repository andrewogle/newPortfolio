import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Jumbotron
} from "reactstrap";
import droom from "../../images/droom.png";

const Portfolio = (props) => {
  return (
    <Jumbotron className = 'portfolio'>
    <a name="portfolio" ></a>
      {/* <div className="header">
        
        <h1 className="call">Look what I can do</h1>
      </div> */}

      <CardColumns>
        <Card>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/LuSPdKZ1yvM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <CardBody>
            <CardTitle className="title appName">D8pPicker</CardTitle>
            <CardSubtitle className="title">Team Lead</CardSubtitle>
            <CardText className="textBlock">
              D8pPicker is an integrated platform for users where a main admin
              can have complete control on the dates, event and the flexibility
              of these to manage a "master" calendar that gets pushed into the
              users' existing platforms in a frictionless manner. D8Picker was
              built with Material UI, React, Node, Express, Context API, Full
              Calendar API, Rrule.js, moment.js, google calendar API and Twilio
              API.
            </CardText>
            <Button className="cardBtn">
              <a href="https://github.com/Lambda-School-Labs/memefly-fe">
                Click here to see frontend code
              </a>
            </Button>
            <Button className="cardBtn">
              <a href="https://github.com/Lambda-School-Labs/memefly-be">
                Click here to see backend code
              </a>
            </Button>
            <Button href="https://www.d8picker.com/" className="cardBtn">
              Click here to visit the app
            </Button>
          </CardBody>
        </Card>
        <Card>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/vCk7QEtE3rY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <CardBody>
            <CardTitle className="title appName">MemeFly</CardTitle>
            <CardSubtitle className="title">Team Lead</CardSubtitle>
            <CardText className="textBlock">
              MemeFly is an AI powered meme generator built on React for
              frontend, using Node, MongoDB, GraphQL , AWS cloud services and
              SQL/NoSQL database for backend. For the data engineering stack,
              the data lake resides on AWS S3 with custom ETL packages that
              complete the data feed-back loop. The machine learning model is
              created with Tensorflow/Keras/Pytorch, packaged and deployed as a
              Restish API. The whole data and machine learning pipelines are
              then orchestrated with DAG tools such as
              Spark/Prefect/Airflow/Kubeflow.
            </CardText>
            <Button className="cardBtn">
              <a href="https://github.com/Lambda-School-Labs/memefly-fe">
                Click here to see frontend code
              </a>
            </Button>
            <Button className="cardBtn">
              <a href="https://github.com/Lambda-School-Labs/memefly-be">
                Click here to see backend code
              </a>
            </Button>
            <Button className="cardBtn">
              <a href="https://github.com/Lambda-School-Labs/memefly-ds">
                Click here to see Data Science code
              </a>
            </Button>
            <Button className="cardBtn">
              <a href="https://www.memeflyai.com/">
                Click here to visit the app
              </a>
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={droom} alt="Card image cap" />
          <CardBody>
            <CardTitle className="title appName">Droom</CardTitle>
            <CardSubtitle className="title">Team Lead</CardSubtitle>
            <CardText className="textBlock">
              Droom means dream in Dutch. This app helps you find your dream job
              by swiping right. Think Tinder + LinkedIn. Companies can create a
              profile and a job listing and then swipe left or right on an
              applicant. Job seekers can create a profile and then swipe left or
              right on job postings. We used React on the front-end, and Node on
              the back-end. My role on this project was that of the project
              manager.
            </CardText>
            <Button className="cardBtn">
              <a href="https://github.com/BWPTDroom/frontend">
                Click here to see frontend code
              </a>
            </Button>
            <Button className="cardBtn">
              <a href="https://github.com/BWPTDroom/droom_api">
                Click here to see backend code
              </a>
            </Button>
            <Button className="cardBtn">
              <a href="https://droombwpt.netlify.com/">
                Click here to visit the app
              </a>
            </Button>
          </CardBody>
        </Card>
      </CardColumns>
    </Jumbotron>
  );
};
export default Portfolio;
