import React, { Component } from "react";
import "./style/Home.css";
import "./style/nav.css";
//import logo from "./img/logo.jpg";
import "bootstrap/dist/css/bootstrap.css";
//import Header from "./Header";

import Footer from "./Footer";
import Nav from "./Nav";
import AboutUs from "./components/AboutUs";
import WOW from "wowjs";
import ServicePart from "./components/Service";
import FindUs from "./components/FindUs";
import Heading from "./components/Heading";
import HeaderVedio from "./HeaderVedio";

class Home extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
        <Nav />
        <br />
        <br />
        <br />
        <HeaderVedio />

        <AboutUs />
        <Heading />
        <ServicePart />
        <FindUs />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
