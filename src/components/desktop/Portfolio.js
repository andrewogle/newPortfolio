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
} from "reactstrap";
import droom from "../../images/droom.png";

const Portfolio = (props) => {
  return (
    <CardColumns>
      <a name="portfolio"></a>
      <Card>
        <iframe
          width="100%"
          height="30%"
          src="https://www.youtube.com/embed/vCk7QEtE3rY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <CardBody>
          <CardTitle >MemeFly</CardTitle>
          <CardSubtitle>Team Lead</CardSubtitle>
          <CardText>
            MemeFly is an AI powered meme generator built on React for frontend,
            using Node, MongoDB, GraphQL , AWS cloud services and SQL/NoSQL
            database for backend. For the data engineering stack, the data lake
            resides on AWS S3 with custom ETL packages that complete the data
            feed-back loop. The machine learning model is created with
            Tensorflow/Keras/Pytorch, packaged and deployed as a Restish API.
            The whole data and machine learning pipelines are then orchestrated
            with DAG tools such as Spark/Prefect/Airflow/Kubeflow.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={droom} alt="Card image cap" />
        <CardBody>
          <CardTitle>Droom</CardTitle>
          <CardSubtitle>Team Lead</CardSubtitle>
          <CardText>
            Droom is basicly Tinder for jobs. Companies can create a profile and
            a job listing and then swipe left or right on an applicant. Job
            seekers can create a profile and then swipe left or right on job
            postings. We used React on the front-end, and Node on the back-end.
            My role on this project was that of the project manager.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Button</Button>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/256x186.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </CardColumns>
  );
};
export default Portfolio;
