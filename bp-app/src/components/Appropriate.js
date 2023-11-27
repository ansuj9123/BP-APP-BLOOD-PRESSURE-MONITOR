import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";


function Appropriate() {

  const navigate = useNavigate();
  return (
    <div className="container p-4 fullscreen gradient-background d-flex flex-column justify-content-between text-center">
      <section>
        <img
          src="./images/aging-high-blood-pressure_0.png"
          className="img-thumbnail rounded-circle"
          width="304"
          height="236"
          alt=""
        />
      </section>

      <section>
        <p className="fs-2 text-uppercase">
          This is not an appropriate service for you
        </p>
      </section>

      <section>
        <Button onClick={()=>navigate(-1)} variant="dark">BACK</Button>
      </section>
    </div>
  );
}

export default Appropriate