import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/Home.css";
import "../style/content.css";
//import Ace from "../img/Ace.jpg";
import Car1962 from "../img/1962car.jpg";
import Ford from "../img/Ford.jpg";
import Cuban from "../img/Cuban.png";

class Heading extends Component {
  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={Cuban}
                  className="card-img-top"
                  alt="Cinque Terre"
                  width="100%"
                  height="200px"
                  data-wow-delay="1s"
                />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary viewButton"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={Car1962}
                  className="card-img-top"
                  alt="Cinque Terre"
                  width="100%"
                  height="200px"
                  data-wow-delay="1s"
                />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary viewButton"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src={Ford}
                  className="card-img-top"
                  alt="Cinque Terre"
                  width="100%"
                  height="200px"
                  data-wow-delay="1s"
                />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary viewButton"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Heading;
