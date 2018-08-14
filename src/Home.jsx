import React, { Component } from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="text-muted" href="">
                Subscribe
              </a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="">
                AutoRepair
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="btn btn-sm btn-outline-secondary" href="">
                Sign up
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav ">
            <a className="p-2 text-muted flex-auto " href="">
              Home
            </a>
            <a className="p-2 text-muted flex-auto" href="">
              Service & Repair
            </a>
            <a className="p-2 text-muted flex-auto" href="">
              Repair Prices
            </a>
            <a className="p-2 text-muted flex-auto" href="">
              Diagnostic
            </a>
            <a className="p-2 text-muted flex-auto" href="">
              Reviews
            </a>
            <a className="p-2 text-muted flex-auto" href="">
              My Car
            </a>
            <a className="p-2 text-muted flex-auto" href="">
              Contact
            </a>
          </nav>
        </div>
        <div>
          <footer className="blog-footer">
            <p>
              Blog template built for{" "}
              <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
              <a href="https://twitter.com/mdo">@mdo</a>.
            </p>
            <p>
              <a href="">Back to top</a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
