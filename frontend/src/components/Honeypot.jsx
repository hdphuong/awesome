import React from "react";
import { Link } from "react-router-dom";

function Honeypot() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Honeypot</h1>
            <span> This site is not empty</span>
            <Link to="/sus">.</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Honeypot;
