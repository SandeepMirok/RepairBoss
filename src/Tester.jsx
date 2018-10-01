import React, { Component } from "react";
import "./style/nav.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/logo.jpg";
import React from "react";
import Moment from "react-moment";
class Tester extends Component {
  render() {
    const date = new Date();
    return (
      <div>
        <Moment add={{ hours: 12 }}>{date}</Moment>
        <Moment add={{ days: 1, hours: 12 }}>{date}</Moment>
        <Moment subtract={{ hours: 12 }}>{date}</Moment>
        <Moment subtract={{ days: 1, hours: 12 }}>{date}</Moment>
      </div>
    );
  }
}

export default Tester;
