import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";

class Diagnostic extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
        <h1>Diagnostic</h1>
        <Footer />
      </div>
    );
  }
}

export default Diagnostic;
