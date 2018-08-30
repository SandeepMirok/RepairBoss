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
          <a className="  flex-auto" href="#/ContactUs">
            Contact
          </a>
          <a className="flex-auto-login" href="#/SignUp">
            <span className="fa fa-user-o" /> Sign Up
          </a>
          <a className="flex-auto-login" href="">
            <span className="fa fa-sign-in" /> Login
          </a>
        </nav>
      </div>
    );
  }
}

export default Nav;
