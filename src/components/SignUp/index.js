import React from "react";
import "./index.css";
import artBoards from "./raychan-kJQ6cDyodAM-unsplash.jpg";
import {
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

export default function SignUp() {
  return (
    <div>
      <figure className="position-relative">
        <img src={artBoards} alt="artBoards" className="img-fluid" />
        <Container fluid>
          <Row>
            <Col>
              <figCaption>Please Sign Up!</figCaption>
            </Col>

            <Col>
              <figCaption className="right-section">
                <Form>
                  <Form.Group controlId="formBasicText">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicText">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Create account
                  </Button>
                </Form>
              </figCaption>
            </Col>
          </Row>
        </Container>
      </figure>
    </div>
  );
}
