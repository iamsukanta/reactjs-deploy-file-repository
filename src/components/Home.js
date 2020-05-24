import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
