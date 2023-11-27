import React from "react";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import {
  bpm,
  bpmType,
  ethnicity,
  prescription,
  image,
  IMG,
} from "../data/Data";
import Ethnicity from "./Ethnicity";


function Systolic() {
  const inputRef = useRef();

  const inputRef2 = useRef();

  let navigate = useNavigate();

  const checkValue = () => {
    let type = inputRef.current.value;

    let heartRate = inputRef2.current.value;

    if (type === "1") {
      if (heartRate < 70 || heartRate > 100) {
        return navigate("/Appropriate");
      }
    } else if (type === "2") {
      if (heartRate < 110 || heartRate > 170) {
        return navigate("/Appropriate");
      }
    }

    bpm.value = heartRate;

    bpmType.value = type;

    prescription.value = "Your Reading is Normal";

    if (bpmType.value === "2") {
      if (
        ethnicity.value === "afro/carribean" &&
        bpm.value >= 140 &&
        bpm.value <= 170
      ) {
        prescription.value = "see your GP and consider and AMLODIPINE";
        image.value = IMG.RED;
      } else if (bpm.value >= 110 && bpm.value <= 139) {
        image.value = IMG.GREEN;
      } else if (ethnicity.value === "other") {
        prescription.value = "See Your GP to consider AMLODPINE or RAMIPRIL";
        image.value = IMG.RED;
      }
    } else if (bpmType.value === "1") {
      if (bpm.value >= 90 && bpm.value <= 100) {
        image.value = IMG.RED;
        prescription.value = "See your GP and Consider AMLODIPINE";

        if (ethnicity.value === "other") {
          prescription.value = "See Your GP to consider AMLODPINE or RAMIPRIL";
        }
      } else if (bpm.value >= 70 && bpm.value <= 85) {
        image.value = IMG.GREEN;

        prescription.value = "Your Reading is Normal";
      } else if (bpm.value >= 86 && bpm.value <= 89) {
        image.value = IMG.AMBER;
        prescription.value = "Visit Your GP to check Your Blood Pressure";
      }
    }

    return navigate("/Prescription");
  };
  return (
    <div className="container p-4 fullscreen gradient-background d-flex flex-column justify-content-between text-center">
      <section>
        <img
          src="./images/systolic-and-diastolic.jpg"
          className="img-thumbnail rounded-circle"
          width="304"
          height="236"
          alt=""
        />
      </section>

      <section>
        <p className="fs-2 text-uppercase">Choose an option below</p>
      </section>
      <div className="d-flex gap-3 justify-content-center">
        <div>
          <Form.Select ref={inputRef} aria-label="Default select example">
            <option value="1">Diastolic</option>
            <option value="2">Systolic</option>
          </Form.Select>
        </div>
        <div>
          <input
            ref={inputRef2}
            id="heart-rate"
            type="number"
            className="form-control text-center"
            min="1"
          ></input>
        </div>
      </div>
      <section>
        <Button onClick={checkValue} variant="dark">
          NEXT
        </Button>
      </section>
    </div>
  );
}

export default Systolic;
