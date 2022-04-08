import React from "react";

function Honeypot() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Honeypot</h1>
            <span> This site is not empty</span>
            <a href="./sus">.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Honeypot;
