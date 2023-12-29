  import React from 'react'
  import Button from "react-bootstrap/Button";
  import { useRef } from 'react';
  import { useNavigate } from 'react-router-dom';

    function Age() {

      let navigate = useNavigate();
      const inputRef = useRef();

      const checkAge = ()=>{
        let age = inputRef.current.value;
        if (age < 40) {
          return navigate("/Appropriate");
        } else {
          return navigate("/Ethnicity");
        }
      }

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
          <p className="fs-2 text-uppercase">
            What is your Age
          </p>
          <div>
            <input ref={inputRef} id='age-input' type='number' className='form-control text-center' min='1' ></input>
          </div>
        </section>

        
        <section>
          <Button onClick={checkAge} variant="dark">NEXT</Button>
        </section>
      </div>
    );
  }

  export default Age