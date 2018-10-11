import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class AutoMechanicFooter extends Component {
  render() {
    return (
        <div>
          <div className="container-fluid socialMedia">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-5 text-center text-md-left">
                Get connected with us on social networks!
              </div>

              <div className="col-md-6 col-lg-7 text-center text-md-right">
                <a>
                  <i className="fa fa-facebook white-text mr-4"> </i>
                </a>

                <a>
                  <i className="fa fa-twitter white-text mr-4"> </i>
                </a>

                <a>
                  <i className="fa fa-linkedin white-text mr-4"> </i>
                </a>

                <a>
                  <i className="fa fa-instagram white-text"> </i>
                </a>
              </div>
            </div>
            <div className="row">
              <div className=" col-md-12 text-center">
              Copyright © 2018 RepairBoss, Inc.
              </div>
            </div>

          </div>
        </div>

    );
  }
}

export default AutoMechanicFooter;
