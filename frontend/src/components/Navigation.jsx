import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
        <div className="container">
          <NavLink className="navbar-brand" style={{marginTop:'50px'}} to="/">
          Something <s>sus</s> awesome
          </NavLink>
          <hr/>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                 Login 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/captcha">
                  Captcha 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/honeypot">
                 Honeypot 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Navigation;
