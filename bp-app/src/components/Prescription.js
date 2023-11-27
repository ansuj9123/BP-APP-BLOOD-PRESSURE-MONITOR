import React from "react";
import Button from "react-bootstrap/esm/Button";
import { bpm, bpmType, ethnicity, prescription, image } from "../data/Data";
import { useNavigate } from "react-router-dom";
const Prescription = () => {

  let navigate = useNavigate();
    console.log(bpm,bpmType,ethnicity,prescription)
  return (
    <div className="container p-4 fullscreen gradient-background d-flex flex-column justify-content-between text-center">
      <section>
        <img
          src={image.value}
          className="img-thumbnail rounded-circle"
          width="304"
          height="236"
          alt=""
        />
      </section>

      <section>
        <p className="fs-2 text-uppercase">{prescription.value}</p>
      </section>

      <section>
        <Button onClick={()=> navigate(-1)} variant="dark">BACK</Button>
      </section>
    </div>
  );
};

export default Prescription;
