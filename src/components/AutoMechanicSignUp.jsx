import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/autoMechanicSignUp.css";
import AutoMechanicNav from "./AutoMechanicNav";
import axios from "axios";

class AutoMechanicSignUp extends Component {
  state = {
    autogaragename: "",
    ownerfirstname: "",
    ownerlastname: "",
    managerfirstname: "",
    managerlastname: "",
    address: "",
    city: "",
    postcode: "",
    website: "",
    primaryphone: "",
    secondaryphone: "",
    email: "",
    insurancecoverage: "",
    fullservice: "",
    independentworkshop: ""
  };

  handleChangeAutogaragename = event => {
    this.setState({ autogaragename: event.target.value });
  };
  handleChangeOwnerfirstname = event => {
    this.setState({ ownerfirstname: event.target.value });
  };
  handleChangeOwnerlastname = event => {
    this.setState({ ownerlastname: event.target.value });
  };
  handleChangeManagerfirstname = event => {
    this.setState({ managerfirstname: event.target.value });
  };
  handleChangeManagerlastname = event => {
    this.setState({ managerlastname: event.target.value });
  };
  handleChangeAddress = event => {
    this.setState({ address: event.target.value });
  };
  handleChangeCity = event => {
    this.setState({ city: event.target.value });
  };
  handleChangePostcode = event => {
    this.setState({ postcode: event.target.value });
  };
  handleChangewebsite = event => {
    this.setState({ website: event.target.value });
  };
  handleChangePrimaryphone = event => {
    this.setState({ primaryphone: event.target.value });
  };
  handleChangeSecondaryphone = event => {
    this.setState({ secondaryphone: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangeInsurancecoverage = event => {
    this.setState({ insurancecoverage: event.target.value });
  };
  handleChangefullservice = event => {
    this.setState({ fullservice: event.target.value });
  };
  handleChangeIndependentworkshop = event => {
    this.setState({ independentworkshop: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const autogaragename = this.state.autogaragename;
    const ownerfirstname = this.state.ownerfirstname;
    const ownerlastname = this.state.ownerlastname;
    const managerfirstname = this.state.managerfirstname;
    const managerlastname = this.state.managerlastname;
    const address = this.state.address;
    const city = this.state.city;
    const postcode = this.state.postcode;
    const website = this.state.website;
    const primaryphone = this.state.primaryphone;
    const secondaryphone = this.state.secondaryphone;
    const email = this.state.email;
    const insurancecoverage = this.state.insurancecoverage;
    const fullservice = this.state.fullservice;
    const independentworkshop = this.state.independentworkshop;

    axios
      .post(`http://192.168.2.160:8080/api/mechanics`, {
        autogaragename,
        ownerfirstname,
        ownerlastname,
        managerfirstname,
        managerlastname,
        address,
        city,
        postcode,
        website,
        primaryphone,
        secondaryphone,
        email,
        insurancecoverage,
        fullservice,
        independentworkshop
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  newMethod() {
    return "Andre";
  }

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
                    onChange={this.handleChangeAutogaragename}
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
                    onChange={this.handleChangeOwnerfirstname}
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
                    onChange={this.handleChangeOwnerlastname}
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
                    onChange={this.handleChangeManagerfirstname}
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
                    onChange={this.handleChangeManagerlastname}
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
                    onChange={this.handleChangeAddress}
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
                    onChange={this.handleChangeCity}
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
                    onChange={this.handleChangePostcode}
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
                    onChange={this.handleChangewebsite}
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
                    onChange={this.handleChangePrimaryphone}
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
                    onChange={this.handleChangeSecondaryphone}
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
                    onChange={this.handleChangeEmail}
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
                    onChange={this.handleChangeInsurancecoverage}
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
                    onChange={this.handleChangefullservice}
                  />
                  <span className="radio-label">Yes</span>
                </div>

                <div className="options">
                  <input
                    name="fullservice"
                    type="radio"
                    id="fullservice_no"
                    value="No"
                    onChange={this.handleChangefullservice}
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
                    onChange={this.handleChangeIndependentworkshop}
                  />
                  <span className="radio-label">Yes</span>
                </div>

                <div className="options">
                  <input
                    name="independent_workshop"
                    type="radio"
                    id="independent_no"
                    value="No"
                    onChange={this.handleChangeIndependentworkshop}
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
