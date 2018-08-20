import React from "react";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.css";

class signup extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
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
                <label htmlFor="first_name">Last Name</label>
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

            <div className="row">
              <div className="sd">
              <div className="role-label ">
                <label>Are you:</label>
              </div>


                  <div className="role  options radio-inline">
                  <input className="with-gap" name="user-type" type="radio" id="user" defaultChecked />
                  <span className="radio-label">User</span>
                  </div>




                  <div className="role   options optionss radio-inline">
                  <input className="with-gap" name="user-type" type="radio" id="mechanic"/>
                  <span className="radio-label">Mechanic</span>
                  </div>



                  <div className="role   options optionss radio-inline">
                  <input className="with-gap" name="user-type" type="radio" id="insurance"/>
                  <span className="radio-label">Insurance</span>
                  </div>
                  </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default signup;
