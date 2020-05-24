import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Contact Page</h1>
      <h5>Mirpur, Dhaka, Bangladesh.</h5>
      <a href="https://bdtunnel.com">www.bdtunnel.com</a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
