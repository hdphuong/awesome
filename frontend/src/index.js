import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Login,
  Captcha,
  Honeypot,
  Sus,
} from "./components";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/captcha" element={<Captcha />} />
      <Route path="/honeypot" element={<Honeypot/>} />
      <Route path="/sus" element={<Sus />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

