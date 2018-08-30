import React, { Component } from "react";
import "./style/nav.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/logo.jpg";
class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav nav-margin fixed-top justify-content-center">
          <img src={logo} className="flex-auto  m-3 mt-5" alt="Logo" />
          {/*
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
          */}
          <a className="  m-3 mt-5 flex-auto " href="">
            Home
          </a>
          <a className=" m-3 mt-5 flex-auto" href="">
            Service & Repair
          </a>
          <a className=" m-3 mt-5 flex-auto" href="">
            Repair Prices
          </a>
          <a className=" m-3  mt-5 flex-auto" href="#/Diagnostic">
            Diagnostic
          </a>
          <a className=" m-3 mt-5 flex-auto" href="">
            Reviews
          </a>
          <a className=" m-3 mt-5 flex-auto" href="">
            My Car
          </a>
          <a className=" m-3 mt-5 flex-auto" href="">
            Contact
          </a>
          <li className="dropdown m-3 mt-5 flex-auto">
            <a className="dropdown-toggle" data-toggle="dropdown" href="">
              Dropdown
            </a>
            <div className="dropdown-menu m-3">
              <a className="dropdown-item" href="">
                Link 1
              </a>
              <a className="dropdown-item" href="">
                Link 2
              </a>
              <a className="dropdown-item" href="">
                Link 3
              </a>
            </div>
          </li>
        </nav>
      </div>
    );
  }
}

export default Nav;
