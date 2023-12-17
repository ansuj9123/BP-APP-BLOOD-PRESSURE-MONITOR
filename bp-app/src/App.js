import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Agelimit from "./components/Agelimit";
import Age from "./components/Age";
import Appropriate from "./components/Appropriate";
import Ethnicity from "./components/Ethnicity";

import Medication from "./components/Medication";
import Service from "./components/Service";
import Systolic from "./components/Systolic";
import Prescription from "./components/Prescription";
import Disclaimer from "./components/Disclaimer";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Age" element={<Age />}></Route>
        <Route exact path="/Agelimit" element={<Agelimit />}></Route>
        <Route exact path="/Appropriate" element={<Appropriate />}></Route>
        <Route exact path="/Ethnicity" element={<Ethnicity />}></Route>
        <Route exact path="/Medication" element={<Medication />}></Route>
        <Route exact path="/Service" element={<Service />}></Route>
        <Route exact path="/Systolic" element={<Systolic />}></Route>
        <Route exact path="/SystolicError" element={<Systolic />}></Route>
        <Route exact path="/Prescription" element={<Prescription />}></Route>
        <Route exact path="/Disclaimer" element={<Disclaimer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
