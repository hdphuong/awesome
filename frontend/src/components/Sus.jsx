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
            <span> Pick one punishment: </span>
            <ul>
              <li> <b>Ban:</b> your IP address will be blocked </li>
              <li> <a href="https://www.timeanddate.com/calendar/?year=2022&country=29"> <b>Suspend:</b> </a> you'll be redirected to an infinite loop to waste your computing power </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sus;
