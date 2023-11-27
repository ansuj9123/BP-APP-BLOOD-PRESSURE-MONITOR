import React from "react";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import { ethnicity } from "../data/Data";

function Ethnicity() {
  let navigate = useNavigate();

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
        <p className="fs-2 text-uppercase">what is your ethnicity</p>
      </section>
      <div className="d-flex gap-3 justify-content-center">
        <Button
          onClick={() => {
            ethnicity.value = "afro/carribean";
            return navigate("/systolic");
          }}
          variant="dark"
        >
          AFRO/CARRIBBEAN
        </Button>
        <Button
          onClick={() => {
            ethnicity.value = "other";
            return navigate("/systolic");
          }}
          variant="dark"
        >
          OTHERS
        </Button>
      </div>
      <section>
        <Button onClick={() => navigate("/SystolicError")} variant="dark">
          NEXT
        </Button>
      </section>
    </div>
  );
}

export default Ethnicity;
