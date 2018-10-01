import React, { Component } from "react";
import AutoMechanicFooter from "./AutoMechanicFooter";
import RepairBossNav from "./RepairBossNav";
import axios from "axios";
import "../style/autoMechanicSignUp.css";

class AutoMechanicSignUp extends Component {
  state = {
    autoGarage_name: "",
    ofirst_name: "",
    olast_name: "",
    mfirst_name: "",
    mlast_name: "",
    address: "",
    city_name: "",
    postal_code: "",
    website: "",
    primary_number: "",
    secondary_number: "",
    Email: "",
    insurance_policy: "",
    fullservice: "",
    independent_workshop: "",
    agree_check: ""
  };

  handleAutoGarageName = event => {
    this.setState({ autoGarage_name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.autoGarage_name);
    const name = this.state.autoGarage_name;
    axios
      .post("http://192.168.2.160:8080/api/user-accounts", {
        username: "ojfsaojfkdlsajfkdaslf"
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        let userAccount = Object.assign({}, res.data, {
          collisionCentres: undefined,
          insuranceCompanies: undefined,
          mechanics: undefined
        });

        axios
          .post("http://192.168.2.160:8080/api/mechanics", {
            availabilityDateTime: "2018-09-27T03:07:58.147Z",
            fullService: true,
            independent: true,
            shopName: name,
            userAccount,
            address: {
              id: 1
            },
            website: "www.james.com"
          })
          .then(res => {
            console.log("==========================");
            console.log(res.data);
          });
      });
  };

  render() {
    return (
      <div>
        <RepairBossNav />

        <div className="back img-responsive">
          <div className="tagline">
            <h2>
              Connecting Auto Economy
              <br />
              for Convenience, Comfort <br />
              and Reliability
            </h2>
          </div>

          <div className="container autoMechanicContainer">
            <form onSubmit={this.handleSubmit}>
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
                    onChange={this.handleAutoGarageName}
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
                    id="insurance_policy"
                    name="insurance_policy"
                    className="form-control"
                    required
                  >
                    <option>Speacial hazards</option>
                    <option>Deductibles</option>
                    <option>Umbrella insurance</option>
                    <option>Business interruption</option>
                    <option>Employee's tools</option>
                    <option>Pollution liability</option>
                  </select>
                  <label htmlFor="insurance_policy" className="required">
                    Insurance Policy
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col-sm-6">
                  <input
                    id="date"
                    name="date"
                    className="form-control"
                    type="text"
                    required
                  />
                  <label className="required">Please select date</label>
                </div>

                <div className="input-field col-sm-6">
                  <select
                    id="time"
                    name="time"
                    className="form-control"
                    required
                  >
                    <option>Speacial hazards</option>
                    <option>Deductibles</option>
                  </select>
                  <label className="required">Please select time</label>
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
                  <label className="form-check-label" htmlFor="agree_check">
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

        <div />
        <AutoMechanicFooter />
      </div>
    );
  }
}

export default AutoMechanicSignUp;
