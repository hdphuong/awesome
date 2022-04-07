import React from "react";

function Home() {
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
            <h1 class="font-weight-light">CTFs for spiders XD </h1>
            <p> This site implemented 3 most widely used anti-scraping techniques: </p>
            <ul> 
              <li> Authentication/Authorisation </li>
              <li> Captcha </li>
              <li> Honeypot </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
