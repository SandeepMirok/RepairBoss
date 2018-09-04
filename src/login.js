import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import "./loginValidator.js";

class login extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Login </h2>
          <div className="row">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
              id="loginButton"
            >
              Login
            </button>

            <div className="modal fade" id="myModal" tabIndex="-1">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <form role="form" id="newModalForm">
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
                        />
                        <span className="hide requiredPassword">
                          This is required field
                        </span>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <a href="#" className="mr-auto forgotPassword">
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
      </div>
    );
  }
}

export default login;
