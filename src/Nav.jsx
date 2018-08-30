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
