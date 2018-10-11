import React, { Component } from "react";
import "../style/RepairBossNav.css";
import twitter from "../img/RepairBossLogo.png";

class RepairBossNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="">
            <img
              src={twitter}
              className="repairBossLogo"
              alt="RepairBoss Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ">
              <li className="nav-item cool-link">
                <a className="nav-link" href="">
                  Get an Estimate
                  <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item cool-link">
                <a className="nav-link" href="">
                  Find a Shop
                </a>
              </li>

              <li className="nav-item cool-link">
                <a className="nav-link" href="">
                  Your Car
                </a>
              </li>

              <li className="nav-item cool-link dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdown2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Car Research
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#/ContactUs">
                    ContactUs
                  </a>

                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#/IndexVerify">
                    Verify
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#/App">
                    APP
                  </a>
                </div>
              </li>
            </ul>

            <ul className="ml-auto navbar-nav">
              <li className="nav-item cool-link">
                <a className="nav-link" href="#/SignUp">
                  For Auto Mechanic
                </a>
              </li>

              <li className="nav-item cool-link">
                <a className="nav-link" href="#/SignUpOld">
                  Signup
                </a>
              </li>

              <li className="nav-item cool-link">
                <a className="nav-link" href="#/Login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default RepairBossNav;
