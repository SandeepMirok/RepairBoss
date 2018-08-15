import React, { Component } from "react";
import "./style/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import Nav from "./Nav";
import AboutUs from "./content/AboutUs";
import WOW from "wowjs";
import ServicePart from "./content/Service";
import FindUs from "./content/FindUs";

class Home extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
        <Header2 />
        <AboutUs />
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
