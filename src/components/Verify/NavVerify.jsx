import React, { Component } from "react";
import "../../style/nav.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../img/LOGO.png";
import fire from "../../config/FireBase";

class NavVerify extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <div className="py-1 mb-2 positionFixed" id="collapsibleNavbar">
          <nav className="nav navbar nav-margin justify-content-center">
            <img src={logo} alt="Logo" />

            <a className=" ml-4 mr-4 flex-auto " href="#/Home">
              Home
            </a>

            <button
              type="submit"
              className="btn btn-danger"
              onClick={this.logout}
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavVerify;
