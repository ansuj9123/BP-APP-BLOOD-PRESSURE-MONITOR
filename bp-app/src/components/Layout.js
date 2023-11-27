import React from "react";
import Button from "react-bootstrap/esm/Button";

function Layout() {
  return (
    <div className="container p-4 fullscreen gradient-background d-flex flex-column justify-content-between text-center">
      {" "}
      <section>
        <img
          src="./images/Blood_pressure_monitoring.jpg"
          className="img-thumbnail rounded-circle"
          alt=""
        />
      </section>
      <section>
        <p className="fs-2 text-uppercase">Blood Pressure Monitor</p>
      </section>
      <section>
        <Button variant="dark">Get Started</Button>
      </section>
    </div>
  );
}

export default Layout;
