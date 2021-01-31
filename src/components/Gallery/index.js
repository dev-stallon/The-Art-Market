import React from "react";
import { Tabs, Tab, Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";
import artHouse from "./eric-park-QbX8A8eHfzw-unsplash.jpg";
import styled from "styled-components";
import { withRouter, useLocation, Link } from "react-router-dom";
import foto from "./icons8-photos.svg";
import artIcon from "./icons8-modern-art-96.png";
import busi from "./icons8-google-photos-512.png";

export default function Gallery() {
  const [key, setKey] = React.useState("My Photos");
  const [myPhotos, setMyPhotos] = React.useState([]);
  const [art, setArt] = React.useState([]);
  const [businessPhotos, setBusinessPhotos] = React.useState([]);

  const handleUploadFile = (file) => {
    let fileData = new FileReader();
    fileData.onloadend = (e) => {
      if (key === "My Photos") {
        setMyPhotos([...myPhotos, fileData.result]);
      } else if (key === "Art") {
        setArt([...art, fileData.result]);
      } else {
        setBusinessPhotos([...businessPhotos, fileData.result]);
      }
    };
    fileData.readAsDataURL(file);
  };

  return (
    <div>
      <figure className="position-relative">
        <img src={artHouse} alt="artHouse" className="img-fluid" />
        <Container fluid>
          <Row>
            <Col>
              <figCaption className="leftStuff">
                <i>
                  <p>Welcome to your gallery,</p>
                  <p>where you can upload,</p>
                  <p>download and remove</p>
                  <p>the pictures that you no longer want.</p>
                </i>
              </figCaption>
            </Col>

            <Col>
              <figCaption className="rightStuff">
                <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                  <Tab
                    eventKey="My Photos"
                    title={
                      <span>
                        {"My Photos"}
                        <img src={foto} width="30px" height="30px" />
                      </span>
                    }
                  >
                    <Row>
                      {myPhotos.length > 0 ? (
                        myPhotos.map((photo) => (
                          <Col md={4}>
                            <img width="100%" height="auto" src={photo} />
                          </Col>
                        ))
                      ) : (
                        <Col md={12}>
                          <p>No photos availble!</p>
                        </Col>
                      )}
                    </Row>
                  </Tab>
                  <Tab
                    eventKey="Art"
                    title={
                      <span>
                        {"Art"}
                        <img src={artIcon} width="30px" height="30px" />
                      </span>
                    }
                  >
                    <Row>
                      {art.length > 0 ? (
                        art.map((photo) => (
                          <Col md={4}>
                            <img width="100%" height="auto" src={photo} />
                          </Col>
                        ))
                      ) : (
                        <Col md={12}>
                          <p>No photos availble!</p>
                        </Col>
                      )}
                    </Row>
                  </Tab>
                  <Tab
                    eventKey="Business Photos"
                    title={
                      <span>
                        {"Business Photos"}
                        <img src={busi} width="30px" height="30px" />
                      </span>
                    }
                  >
                    <Row>
                      {businessPhotos.length > 0 ? (
                        businessPhotos.map((photo) => (
                          <Col md={4}>
                            <img width="100%" height="auto" src={photo} />
                          </Col>
                        ))
                      ) : (
                        <Col md={12}>
                          <p>No photos available!</p>
                        </Col>
                      )}
                    </Row>
                  </Tab>
                </Tabs>
                <div>
                  <label className="label" htmlFor="myInput">
                    upload
                  </label>
                  <input
                    id="myInput"
                    style={{ display: "none" }}
                    name="file"
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={(e) => handleUploadFile(e.target.files[0])}
                  />
                </div>
              </figCaption>
            </Col>
          </Row>
        </Container>
      </figure>
    </div>
  );
}
