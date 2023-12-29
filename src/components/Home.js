import React from 'react';

import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';


function Home() {
  let navigate = useNavigate() 
  return (
    <div className="container p-4 fullscreen gradient-background d-flex flex-column justify-content-between text-center">
      <section>
        <img src="./images/Blood_pressure_monitoring.jpg" className="img-thumbnail rounded-circle" width="304" height="236" alt=''/>
      </section>

      <section>
        <p className='fs-2 text-uppercase' >Blood Pressure Monitor</p>
      </section>
      <section>
        <Button onClick={()=>navigate("/Disclaimer")} variant='dark'>Get Started</Button>
      </section>
    </div>
  );
}

export default Home