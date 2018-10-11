import React, { Component } from "react";
import Nav from "../Nav";
import Axios from "./Axios";
import Calender from "./Calender";
class ContactUs extends Component {
  render() {
    return (
      <div className="">
        <Nav />
        <div className="container">
          <h2>Contact US</h2>
          <Axios />
          <Calender />
        </div>
      </div>
    );
  }
}
export default ContactUs;
