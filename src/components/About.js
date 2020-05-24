import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className="about">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>About Page</h1>
      <h5>This is simply a about page. you can edit here.</h5>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          {/* <a href="/contact">Contact</a> */}
        </li>
      </ul>
    </div>
  );
}

export default About;
