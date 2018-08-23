import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/signup.css";
import "../js/script";

class signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      passwordConfirm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    e.target.classList.add("active");

    this.setState({
      [e.target.name]: e.target.value
    });

    this.showInputError(e.target.name);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("component state", JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log("form is invalid: do not submit");
    } else {
      console.log("form is valid: submit");
    }
  }

  showFormErrors() {
    const inputs = document.querySelectorAll("input");
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add("active");

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf("password") !== -1;
    const isPasswordConfirm = refName === "passwordConfirm";

    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity("Passwords do not match");
      } else {
        this.refs.passwordConfirm.setCustomValidity("");
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`;
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be longer than 4 chars`;
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = "Passwords do not match";
      }
      return false;
    }

    error.textContent = "";
    return true;
  }
  render() {
    return (
      <div className="back img-responsive">
        <div className="containerSig">
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
                  name="password"
                  ref="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  pattern=".{5,}"
                  required
                />
                <label id="passwordLabel">Password</label>
                <div className="error" id="passwordError" />
              </div>
            </div>

            <div className="row">
              <div className="input-field col col-sm-12">
                <input
                  id="password_two"
                  className="input-border"
                  type="password"
                  name="passwordConfirm"
                  ref="passwordConfirm"
                  value={this.state.passwordConfirm}
                  onChange={this.handleChange}
                  required
                />
                <label id="passwordConfirmLabel">Confirm Password</label>
                <div className="error" id="passwordConfirmError" />
              </div>
            </div>

            <div className="row radio-group ">
              <div className="role-label">
                <span className="span-role">Select your role:</span>
              </div>

              <div className="options">
                <input name="user-type" type="radio" id="user" defaultChecked />
                <span className="radio-label">User</span>
              </div>

              <div className="options">
                <input
                  name="user-type"
                  type="radio"
                  id="mechanic"
                  value="mechanic"
                />
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
                <label htmlFor="shop_name" id="shop_name_label">
                  Shop Name
                </label>
              </div>

              <div className="input-field col-sm-6">
                <input
                  id="mphone_number"
                  className="input-border"
                  type="tel"
                  required
                />
                <label htmlFor="mphone_number" id="mphone_number_label">
                  Shop Phone
                </label>
              </div>
            </div>

            <div id="company_group">
              <div className="row">
                <div className="input-field col-sm-6">
                  <input
                    id="company_name"
                    className="input-border"
                    type="text"
                    required
                  />
                  <label htmlFor="company_name" id="company_name_label">
                    Company Name
                  </label>
                </div>

                <div className="input-field col-sm-6">
                  <input
                    id="cphone_number"
                    className="input-border"
                    type="tel"
                    required
                  />
                  <label htmlFor="cphone_number" id="cphone_number_label">
                    Company Phone
                  </label>
                </div>
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
    );
  }
}

export default signup;
