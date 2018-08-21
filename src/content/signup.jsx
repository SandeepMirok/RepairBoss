import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/signup.css";

class signup extends React.Component {
  render() {
    return (
      <div className="back">
        <div className="containerLog">
          <form>
            <div className="row">
              <div className="form-header col col-sm-12">
                <span>Sign up to RepairBoss</span>
              </div>
            </div>

            <div className="row">
              <div className="input-field col col-sm-6 ">
                <input
                  id="first_name"
                  className="input-border"
                  type="text"
                  required
                />
                <label htmlFor="first_name">First Name</label>
              </div>

              <div className="input-field col col-sm-6">
                <input
                  id="last_name"
                  className="input-border"
                  type="text"
                  required
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col col-sm-12">
                <input
                  id="email"
                  className="input-border"
                  type="email"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col col-sm-12">
                <input
                  id="password"
                  className="input-border"
                  type="password"
                  minLength="6"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col col-sm-12">
                <input
                  id="cpassword"
                  className="input-border"
                  type="password"
                  required
                />
                <label htmlFor="cpassword">Confirm Password</label>
              </div>
            </div>

            <div className="row radio-group">
              <div className="role-label">
                <span>Select your role:</span>
              </div>

              <div className="options">
                <input name="user-type" type="radio" id="user" defaultChecked />
                <span className="radio-label">User</span>
              </div>

              <div className="options">
                <input name="user-type" type="radio" id="mechanic" />
                <span className="radio-label">Mechanic</span>
              </div>

              <div className="options">
                <input name="user-type" type="radio" id="insurance" />
                <span className="radio-label">Insurance</span>
              </div>
            </div>

            <div className="row">
              <div className="input-field col-sm-6">
                <input
                  id="shop_name"
                  className="input-border"
                  type="text"
                  required
                />
                <label htmlFor="shop_name">Shop Name</label>
              </div>

              <div className="input-field col-sm-6">
                <input
                  id="phone_number"
                  className="input-border"
                  type="text"
                  required
                />
                <label htmlFor="phone_number">Shop Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col-sm-6 offset-sm-3">
                <button
                  className="btn btn-register"
                  type="submit"
                  name="action"
                >
                  REGISTER
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default signup;
