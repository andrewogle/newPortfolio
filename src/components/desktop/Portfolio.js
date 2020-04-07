import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from "reactstrap";
import droom from "../../images/droom.png";

const Portfolio = props => {
  return (
    <CardColumns>
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
        <CardImg
          top
          width="100%"
          src="/assets/256x186.svg"
          alt="Card image cap"
        />
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
