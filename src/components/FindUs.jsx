import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/Home.css";
import "../style/content.css";
import "../style/FindUs.css";
//import Ace from "../img/Ace.jpg";

import Map from "../img/OntarioMap.jpg";

class AboutUs extends Component {
  render() {
    return (
      <div className="findus" id="findus">
        <div className="container">
          <div className="span4">
            <img src={Map} className="rounded float-left size" alt="Map" />
            <div className="content-heading">
              <h3>Experience &nbsp </h3>
            </div>
            <p>
              Donec id elit non mi porta gravida at eget metus. Etiam porta sem
              malesuada magna mollis euismod. Donec sed odio dui.
            </p>
            <p>
              Donec id elit non mi porta gravida at eget metus. Etiam porta sem
              malesuada magna mollis euismod. Donec sed odio dui.
            </p>
            <p>
              Donec id elit non mi porta gravida at eget metus. Etiam porta sem
              malesuada magna mollis euismod. Donec sed odio dui.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
