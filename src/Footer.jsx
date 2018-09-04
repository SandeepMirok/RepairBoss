import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/footer.css";

class footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
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
          </div>
          <div className="container-fluid text-center text-md-left mt-5">
            <div className="row mt-3 ">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold companyName">
                  Company name
                </h6>
                <hr className="deep-blue mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  Here you can use rows and columns here to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase font-weight-bold">
                  Get Your Car Fixed
                </h6>
                <hr className="deep-blue mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#!">Get an Estimate</a>
                </p>
                <p>
                  <a href="#!">Find a Shop</a>
                </p>
                <p>
                  <a href="#!">Why RepairBoss?</a>
                </p>
                <p>
                  <a href="#!">How To Guides</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  Useful links
                </h6>
                <hr className="deep-blue mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#!">Your Account</a>
                </p>
                <p>
                  <a href="#!">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr className="deep-blue mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <i className="fa fa-home mr-3" /> 1140 Sheppard Ave W #7{" "}
                  <br />
                  <p className="address">North York, ON M3K 2A2</p>
                </p>
                <p>
                  <i className="fa fa-envelope mr-3" /> info@example.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fa fa-print mr-3" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid socialMedia">
            <div className=" text-center py-1">
              Copyright © 2018 RepairBoss, Inc.
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default footer;
