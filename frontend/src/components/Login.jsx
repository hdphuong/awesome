import { GoogleLogin, GoogleLogout } from "react-google-login";
import React from "react";
import { gapi } from 'gapi-script'
import { useState } from "react";


function Login() {
  const clientId = "245615667287-nb0938ataneoq84jj6r1bmm9k6sqpngn.apps.googleusercontent.com";

  const [loginData, setLoginData] = useState( 
    localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null);

  const handleLogin = (response) => {
    setLoginData(response.profileObj);

  }

  const handleLogout = (response) => {
    localStorage.removeItem("loginData");
    setLoginData(null);
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
            {loginData ? 
              ( <div>
                <p> If_this_was_a_flag: congrats_logged_in_successfully </p>
                <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={handleLogout} /> 
                </div>)
            :
            (<GoogleLogin 
              clientId = {clientId}
              buttonText="Login"
              onSuccess={handleLogin}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
