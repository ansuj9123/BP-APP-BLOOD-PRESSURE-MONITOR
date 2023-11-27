import React from 'react'
import Button from "react-bootstrap/Button";

function Agelimit() {
  return (
    <div className="container p-4 fullscreen gradient-background d-flex flex-column justify-content-between text-center">
      <section>
        <img
          src="./images/blood-pressure-heart-attack.jpg"
          className="img-thumbnail rounded-circle"
          width="304"
          height="236"
          alt=""
        />
      </section>

      <section>
        <p className="fs-2 text-uppercase">sorry your age is less than 40 this is not an appropriate service for you</p>
      </section>

      <section>
        <Button variant="dark">NEXT</Button>
      </section>
    </div>
  );
}

export default Agelimit