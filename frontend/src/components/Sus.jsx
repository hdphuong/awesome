import React from "react";

function Sus() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">SUS</h1>
            <p> Suspicious behaviours detected </p>
            <p> Pick one punishment: </p>
            <ul>
              <li> Ban: your IP address will be blocked </li>
              <li> Suspend: you'll be redirected to an infinite loop to waste your computing power </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sus;
