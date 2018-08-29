import React, { Component } from "react";
import "./style/HeaderVedio.css";
import "bootstrap/dist/css/bootstrap.css";
import car from "./img/Mercedes.mp4";
import Nav from "./Nav";
class HeaderVedio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: car
    };
  }
  render() {
    return (
      <header className="text-white container-fluid">
        <div className="overlay" />
        <div className="vedio">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            overlay
          >
            <source src={this.state.videoURL} type="video/mp4" />
          </video>
        </div>

        <div className="container h-100">
          <div className="d-flex text-center h-100">
            <div className="my-auto w-100 text-white">
              <h1 className="display-3">AutoRepair</h1>
              <h2>Always to head to help you</h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderVedio;
