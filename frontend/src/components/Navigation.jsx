import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            React Multi-Page Website
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
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
