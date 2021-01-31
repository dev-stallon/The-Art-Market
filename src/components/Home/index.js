import React from "react";
import { Container } from "react-bootstrap";
import art from "./kerensa-pickett-O7kjKKuUyCA-unsplash.jpg";
import "./index.css";

function Home() {
  return (
    <div>
      <figure className="position-relative">
        <img src={art} alt="art" className="img-fluid" />

        <figCaption>
          <i>Welcome to the Art Makert</i>
        </figCaption>
      </figure>
    </div>
  );
}

export default Home;
