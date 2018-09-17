import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/autoMechanicSignUp.css";
import AutoMechanicNav from "./AutoMechanicNav";

class AutoMechanicSignUp extends Component {
  render() {
    return (
      <div>
        <div>
          <AutoMechanicNav />
        </div>
        <div className="back img-responsive">
          <div className="tagline">
            <h2>
              Connecting Auto Economy for <br />
              Convenience, Comfort and <br />
              Reliability
            </h2>
          </div>

          <div className="container autoMechanicContainer">
            <form>
              <div className="row">
                <div className="form-header col-sm-12">
                  <span className="form_headerr">
                    Welcome to RepairBoss Auto System
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="input-field col-sm-12 ">
                  <input
                    id="autoGarage_name"
                    name="autoGarage_name"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label htmlFor="autoGarage_name" className="required">
                    Auto Garage Name
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col-sm-6 ">
                  <input
                    id="ofirst_name"
                    name="ofirst_name"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label htmlFor="ofirst_name" className="required">
                    Owner's First Name
                  </label>
                </div>

                <div className="input-field col-sm-6">
                  <input
                    id="olast_name"
                    name="olast_name"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label htmlFor="olast_name" className="required">
                    {" "}
                    Owner's Last Name
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col-sm-6 ">
                  <input
                    id="mfirst_name"
                    name="mfirst_name"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label htmlFor="mfirst_name" className="required">
                    Manager's First Name
                  </label>
                </div>

                <div className="input-field col-sm-6">
                  <input
                    id="mlast_name"
                    name="mlast_name"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label htmlFor="mlast_name" className="required">
                    {" "}
                    Manager's Last Name
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col-sm-6 ">
                  <input
                    id="address"
                    name="address"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label htmlFor="address" className="required">
                    Address
                  </label>
                </div>
                <div className="input-field col-sm-6">
                  <input
                    id="city_name"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label htmlFor="city_name" className="required">
                    City
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col-sm-6">
                  <input
                    id="postal_code"
                    name="postal_code"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label htmlFor="postal_code" className="required">
                    Postal Code
                  </label>
                </div>

                <div className="input-field col-sm-6">
                  <input
                    id="website"
                    name="website"
                    className="form-control"
                    type="url"
                  />
                  <label htmlFor="website">Website</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col-sm-6">
                  <input
                    id="primary_number"
                    name="primary_number"
                    className="form-control"
                    type="tel"
                    required
                  />
                  <label htmlFor="primary_number" className="required">
                    Primary Phone No
                  </label>
                </div>

                <div className="input-field col-sm-6">
                  <input
                    id="secondary_number"
                    name="secondary_number"
                    className="form-control"
                    type="tel"
                  />
                  <label htmlFor="secondary_number">Secondary Phone No</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col-sm-6">
                  <input
                    id="email"
                    name="email"
                    className="form-control"
                    type="email"
                    required
                  />
                  <label htmlFor="email" className="required">
                    Email
                  </label>
                </div>

                <div className="input-field col-sm-6">
                  <select
                    id="insurance_coverage"
                    name="insurance_coverage"
                    className="form-control"
                    type="email"
                    required
                  >
                    <option>Speacial hazards</option>
                    <option>Deductibles</option>
                    <option>Umbrella insurance</option>
                    <option>Business interruption</option>
                    <option>Employee's tools</option>
                    <option>Pollution liability</option>
                  </select>
                  <label htmlFor="insurance_coverage" className="required">
                    Insurance Coverage
                  </label>
                </div>
              </div>

              <div className="row radio-group col-sm-12 form-check-inline">
                <div className="role-label">
                  <span className="span-role">Full Service:</span>
                </div>

                <div className="options">
                  <input
                    name="fullservice"
                    type="radio"
                    id="fullservice_yes"
                    value="Yes"
                    defaultChecked
                  />
                  <span className="radio-label">Yes</span>
                </div>

                <div className="options">
                  <input
                    name="fullservice"
                    type="radio"
                    id="fullservice_no"
                    value="No"
                  />
                  <span className="radio-label">No</span>
                </div>
              </div>

              <div className="row radio-group col-sm-12 form-check-inline">
                <div className="role-label">
                  <span className="span-role">Independent Workshop</span>
                </div>

                <div className="options">
                  <input
                    name="independent_workshop"
                    type="radio"
                    id="independent_yes"
                    value="Yes"
                    defaultChecked
                  />
                  <span className="radio-label">Yes</span>
                </div>

                <div className="options">
                  <input
                    name="independent_workshop"
                    type="radio"
                    id="independent_no"
                    value="No"
                  />
                  <span className="radio-label">No</span>
                </div>
              </div>
              <div className="row col-sm-12  offset-sm-1">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agree_check"
                    name="agree_check"
                  />
                  <label className="form-check-label" htlmfor="agree_check">
                    I Agree that the information provided above is correct.
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col-sm-6 offset-sm-3">
                  <button
                    className="btn btn-register"
                    type="submit"
                    name="register"
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AutoMechanicSignUp;
