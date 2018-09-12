import React, { Component } from "react";
import Nav from "../Nav";
import Axios from "./Axios";
class ContactUs extends Component {
  render() {
    return (
      <div className="space">
        <Nav />
        <div className="container">
          <h2>Contact US</h2>
          <Axios />
        </div>
      </div>
    );
  }
}
export default ContactUs;
