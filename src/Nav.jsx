import React, { Component } from "react";
import "./style/nav.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/logo.jpg";
class Nav extends Component {
  render() {
    return (
      <div
        className="nav-scroller py-1 mb-2 positionFixed"
        id="collapsibleNavbar"
      >
        <nav className="nav nav-margin">
          <img src={logo} alt="Logo" />

          <a className="  flex-auto " href="">
            Home
          </a>
          <a className="  flex-auto" href="">
            Service & Repair
          </a>
          <a className="  flex-auto" href="">
            Repair Prices
          </a>
          <a className="  flex-auto" href="#/Diagnostic">
            Diagnostic
          </a>
          <a className="  flex-auto" href="">
            Reviews
          </a>
          <a className="  flex-auto" href="">
            My Car
          </a>
          <a className="  flex-auto" href="">
            Contact
          </a>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="">
              Dropdown
            </a>
            <div className="dropdown-menu">
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
