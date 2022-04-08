import React from "react";

function Sus() {
  return (
    <div className="sus">
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
            <h1 class="font-weight-light">SUS</h1>
            <p> Suspicious behaviours detected </p>
            <p> Pick one punishments: </p>
            <ul>
              <li> Ban: your IP address will be blocked </li>
              <li> Suspend: we'll redirect you to an indefinite loop to waste your computing power </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sus;
