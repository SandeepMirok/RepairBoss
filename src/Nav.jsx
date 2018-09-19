import React, { Component } from "react";
import "./style/nav.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/logo-01.png";
import axios from "axios";

import "./style/login.css";
import "./js/loginValidator.js";

class Nav extends Component {
  state = {
    name: "",
    password: ""
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const username = this.state.name;
    const password = this.state.password;

    axios
      .post(`http://192.168.2.160:8080/api/authenticate`, {
        password,
        remrememberMe: false,
        username
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        let token = res.data.id_token;
        console.log(token);
        axios
          .get("http://192.168.2.160:8080/api/account", {
            headers: { Authorization: "Bearer " + token }
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          .catch(err => {
            console.error(err);
          });
      });
  };

  render() {
    return (
      <div>
        <div className="py-1 mb-2 positionFixed" id="collapsibleNavbar">
          <nav className="nav navbar nav-margin justify-content-center">
            <img src={logo} alt="Logo" />

            <a className=" ml-4 mr-4 flex-auto " href="">
              Home
            </a>
            <a className=" ml-4 mr-4 flex-auto" href="">
              Service & Repair
            </a>
            <a className=" ml-4 mr-4 flex-auto" href="#/SignUpOld">
              Old SignUp
            </a>
            <a className="ml-4 mr-4  flex-auto" href="#/Diagnostic">
              Diagnostic
            </a>
            <a className="ml-4 mr-4  flex-auto" href="">
              Reviews
            </a>
            <a className="ml-4 mr-4  flex-auto" href="">
              My Car
            </a>
            <a className="ml-4 mr-4  flex-auto" href="#/ContactUs">
              Contact
            </a>
            <a className="flex-auto-login" href="#/SignUp">
              <span className="fa fa-user-o" /> Sign Up
            </a>
            <a
              className=" ml-3 mr-3 flex-auto-login"
              data-toggle="modal"
              data-target="#myModal"
            >
              <span className=" fa fa-sign-in" /> Login
            </a>
          </nav>
        </div>
        <div className="container">
          <div className="modal fade" id="myModal" tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <form id="newModalForm" onSubmit={this.handleSubmit}>
                  <div className="modal-header">
                    <h4 className="modal-title form-header">
                      Login to RepairBoss
                    </h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      id="closeModal"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="inputUserName" className="popupText">
                        Username
                      </label>
                      <input
                        className="form-control"
                        placeholder="Please enter your username"
                        type="text"
                        id="inputUserName"
                        required
                        onChange={this.handleChangeName}
                      />
                      <span className="hide requiredUser">
                        This is required field
                      </span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputPassword" className="popupText">
                        Password
                      </label>
                      <input
                        className="form-control"
                        placeholder="Please enter your password"
                        type="password"
                        id="inputPassword"
                        required
                        onChange={this.handleChangePassword}
                      />
                      <span className="hide requiredPassword">
                        This is required field
                      </span>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <a href="" className="mr-auto forgotPassword">
                      Forgot Password ?
                    </a>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg loginText "
                        data-dismiss="modal"
                        id="modalSubmit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
