import React from "react";
import { Link } from "react-router-dom";

function Honeypot() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Honeypot</h1>
            <br/>
            <span> Bad spiders ain't good, </span>
            <br/>
            <span> Good spiders ain't fun<Link to="/sus">.</Link> </span>
            <br/>
            <br/>
            <p style={{color:"white"}}> Flag {"{"}security_by_obscurity_at_its_finest{"}"} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Honeypot;
