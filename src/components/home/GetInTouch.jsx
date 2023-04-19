import React from "react";
import { Jumbotron } from "./migration";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <Jumbotron id="get-in-touch">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} .
      </p>
      <p><a className="text-decoration-none" href={`mailto:${email}`}>{email}</a></p>
      <p><a className="text-decoration-none">Hai Chau - Da Nang</a></p>
      <p><a className="text-decoration-none" href="tel:+84362911617">0362911617</a></p>
      <p>
      Thank you for your time and interest in my portfolio
      </p>
    </Jumbotron>
  );
};

export default GetInTouch;
