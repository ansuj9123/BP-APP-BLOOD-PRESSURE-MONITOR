import React from "react";
import Button from "react-bootstrap/esm/Button";
import { bpm, bpmType, ethnicity } from "../data/Data";
const Prescription = () => {
  console.log(bpm, bpmType, ethnicity);
  return (
    <div className="container p-4 fullscreen gradient-background d-flex flex-column justify-content-between text-center">
      <section>
        <img
          src="./images/Red-tick.png"
          className="img-thumbnail rounded-circle"
          width="304"
          height="236"
          alt=""
        />
      </section>

      <section>
        <p className="fs-2 text-uppercase">See your GP and consider Amlodipine</p>
      </section>

      <section>
        <Button variant="dark">BACK</Button>
      </section>
    </div>
  );
};

export default Prescription;
