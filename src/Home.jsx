import React, { Component } from "react";
import "./style/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

class Home extends Component {
  render() {
    return (
      <div className="container">
       <Header/>
        <Nav/>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;
