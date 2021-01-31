import React from "react";
import House from "./mick-haupt-VbI0LMaGMlg-unsplash.jpg";
import {
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "./index.css";

export default function Login() {
  return (
    <div>
      <figure className="position-relative">
        <img src={House} alt="House" className="img-fluid" />

        <Container fluid>
          <Row>
            <Col></Col>

            <Col>
              <figCaption className="rightColumn">
                <div className="theForm">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Forgot Password?" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </Form>
                </div>
              </figCaption>
            </Col>
          </Row>
        </Container>
      </figure>
    </div>
  );
}
