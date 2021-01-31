import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { withRouter, useLocation, Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: transparent;
    padding-left: 30px;
    padding-right: 30px;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #fff;
    font-size: 22px;
    font-weight: bold;

    &:hover {
      color: withRouter;
    }
  }

  #nav-selected {
    border-bottom: 3px solid red;
  }

  #nav-unSelected {
  }

  .nav-item {
    margin-right: 20px;
  }
`;

function NavigationBar() {
  const location = useLocation();
  const currentPath = () => {
    if (location.pathname.includes("Gallery")) {
      return "Gallery";
    } else if (location.pathname.includes("Login")) {
      return "Login";
    } else if (location.pathname.includes("SignUp")) {
      return "SignUp";
    } else {
      return "Home";
    }
  };
  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand
          href="/"
          id={currentPath() === "Home" ? "nav-selected" : "nav-unSelected"}
        >
          HOME
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link
                href="/Gallery"
                id={
                  currentPath() === "Gallery"
                    ? "nav-selected"
                    : "nav-unSelected"
                }
              >
                Gallery
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Login"
                id={
                  currentPath() === "Login" ? "nav-selected" : "nav-unSelected"
                }
              >
                Log in
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/SignUp"
                id={
                  currentPath() === "SignUp" ? "nav-selected" : "nav-unSelected"
                }
              >
                Sign Up
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
