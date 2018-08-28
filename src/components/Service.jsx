import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/Home.css";
import "../style/content.css";
import "font-awesome/css/font-awesome.css";

class ServicePart extends Component {
  render() {
    return (
      <div className="services" id="services">
        <div className="container">
          <h3 className="title">Services</h3>
          <div className="row work-row">
            <div
              className="col-sm-6 col-md-4 work-row-grids wow bounceIn animated"
              data-wow-delay=".5s"
            >
              <div className="work-grids-img">
                <i
                  className="fa fa-dashboard fa-fw fa-lg "
                  aria-hidden="true"
                />
              </div>
              <div className="caption work-captn">
                <h4>Lorem ipsum</h4>
                <p>Vero eos et accusamus et iusto odio dignissimos ducimus</p>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-4 work-row-grids wow bounceIn animated"
              data-wow-delay=".5s"
            >
              <div className="work-grids-img">
                <i className="fa fa-wrench fa-fw fa-lg " aria-hidden="true" />
              </div>
              <div className="caption work-captn">
                <h4>Lorem ipsum</h4>
                <p>Vero eos et accusamus et iusto odio dignissimos ducimus</p>
              </div>
            </div>
            <div
              className="col-sm-6 col-md-4 work-row-grids wow bounceIn animated"
              data-wow-delay=".5s"
            >
              <div className="work-grids-img">
                <i className="fa fa-car fa-fw fa-lg " aria-hidden="true" />
              </div>
              <div className="caption work-captn">
                <h4>Lorem ipsum</h4>
                <p>Vero eos et accusamus et iusto odio dignissimos ducimus</p>
              </div>
            </div>

            <div className="clearfix" />
          </div>
        </div>
      </div>
    );
  }
}

export default ServicePart;
