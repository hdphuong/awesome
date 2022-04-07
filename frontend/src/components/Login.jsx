import { GoogleLogin } from "react-google-login";
import React from "react";

const clientId = "245615667287-nb0938ataneoq84jj6r1bmm9k6sqpngn.apps.googleusercontent.com";


function Login() {
  const onSuccess = (response) => {
    console.log(response);
  }

  const onFailure = (response) => {
    console.log(response);
  }

  return (
    <div className="login">
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
            <h1 class="font-weight-light">Login</h1>
            <GoogleLogin 
              clientId = {clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
