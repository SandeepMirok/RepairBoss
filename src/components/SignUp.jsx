import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import AutoMechanicFooter from "./AutoMechanicFooter";
import "../style/signup.css";
import RepairBossNav from "./RepairBossNav";

class signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: "",
      passwordConfirm: "",
      showMechanic: false,
      showInsurance: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleMechanic = this.toggleMechanic.bind(this);
    this.toggleInsurance = this.toggleInsurance.bind(this);
  }

  toggleMechanic = () => {
    this.setState({ showMechanic: true });
    this.setState({ showInsurance: false });
  };

  toggleInsurance = () => {
    this.setState({ showMechanic: false });
    this.setState({ showInsurance: true });
  };

  hide = () => {
    this.setState({ showMechanic: false });
    this.setState({ showInsurance: false });
  };

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

  handleUserName = event =>
  {
    this.setState ({username:event.target.value});
  }

  handleSubmit = event =>
  {
    alert(this.state.username);
  }




  render() {
    return (
    <div>
    <RepairBossNav/>

      <div className="backsignup img-responsive">


        <div className="container signupContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-header col col-sm-12">
                <span>Login to RepairBoss</span>
              </div>
            </div>


            <div className="row">
              <div className="input-field col col-sm-12">
                <input
                  id="username"
                  className="form-control"
                  type="text"
                  required
                  onChange ={this.handleUserName}
                />
                <label htmlFor="username">Username</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col col-sm-12">
                <input
                  id="password"
                  className="form-control"
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
                  className="form-control"
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

      <AutoMechanicFooter/>
      </div>



    );
  }
}

export default signup;
