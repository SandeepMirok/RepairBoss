import React, { Component } from "react";
import "./style/Home.css";

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
import TimeTest from "./components/TimeTest";
//import Tester from "./Tester";

class Home extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="container-Home">
        <Nav />
        <HeaderVedio />
        <AboutUs />
        <Heading />
        <ServicePart />
        <FindUs />
        <TimeTest />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
