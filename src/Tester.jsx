import React, { Component } from "react";
import "./style/nav.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/logo.jpg";
class Tester extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md ">
          <img src={logo} alt="Logo" />
          <button
            className="navbar-toggler bg-dark "
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <a class="nav-link" href="">
              Link
            </a>
            <a class="nav-link" href="">
              Link
            </a>
            <a class="nav-link" href="">
              Link
            </a>
            <a class="nav-link" href="">
              Link
            </a>
            <a class="nav-link" href="">
              Link
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Tester;
