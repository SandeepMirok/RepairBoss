import React, { Component } from "react";
import "./style/Home.css";
import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {
  render() {
    return (
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="#/SignUp">
              Subscribe
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#/Home">
              AutoRepair
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="btn btn-sm btn-outline-secondary" href="">
              Login
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
