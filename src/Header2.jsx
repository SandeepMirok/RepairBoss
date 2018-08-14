import React, { Component } from "react";
import "./style/Home.css";
import "bootstrap/dist/css/bootstrap.css";

class Header extends Component {
  render() {
    return (
      <header className="bg-primary text-white">
        <div className="container text-center">
          <h1>Welcome to Scrolling Nav</h1>
          <p class="lead">
            A landing page template freshly redesigned for Bootstrap 4
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
