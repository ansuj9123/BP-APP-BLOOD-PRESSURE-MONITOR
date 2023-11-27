import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Medication() {
  let navigate = useNavigate();
  return (
    <div className="container p-4 fullscreen gradient-background d-flex flex-column justify-content-between text-center">
      <section>
        <img
          src="./images/Blood-Pressure-Chart.png"
          className="img-thumbnail rounded-circle"
          width="304"
          height="236"
          alt=""
        />
      </section>

      <section>
        <p className="fs-2 text-uppercase">Are you on medication</p>
      </section>
      <div className="d-flex gap-3 justify-content-center">
        <Button onClick={() => navigate("/Appropriate")} variant="dark">
          Yes
        </Button>
        <Button onClick={() => navigate("/Age")} variant="dark">
          No
        </Button>
      </div>
      <section>
        <Button variant="dark">NEXT</Button>
      </section>
    </div>
  );
}

export default Medication;
