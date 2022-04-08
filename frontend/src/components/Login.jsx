import { GoogleLogin, GoogleLogout } from "react-google-login";
import React from "react";
import { useState } from "react";


function Login() {
  const clientId = "245615667287-nb0938ataneoq84jj6r1bmm9k6sqpngn.apps.googleusercontent.com";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (response) => {
    setIsLoggedIn(true);

  }

  const handleLogout = (response) => {
    setIsLoggedIn(false);
  }

  const onFailure = (response) => {
    console.log(response);
  }

  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Login</h1>
            {isLoggedIn ? 
              ( <div>
                <p> If this was a flag: Flag{" {"}congrats_logged_in_successfully{"}"} </p>
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
