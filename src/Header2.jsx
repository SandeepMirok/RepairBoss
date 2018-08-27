import React, { Component } from "react";
import "./style/Home.css";
import "./style/header.css";
import "bootstrap/dist/css/bootstrap.css";
//import { Slide } from "react-slideshow-image";
//import BackgroundSlideshow from "react-background-slideshow";
//import Audi from "./img/audi_r8.jpg";
import car from "./img/Mercedes.mp4";
//const images = [Slide1, Slide2];
/*
const Slideshow = () => {
  return <Slide images={images} duration={5000} transitionDuration={1000} />;
};
*/
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: car
    };
  }
  render() {
    return (
      <header className="text-white">
        <div>
          <h1 className="text-center container">
            <span className="header2 ">WelCome To Auto Repair</span>
          </h1>
          <div className="container text-center ooo">
            <div className="videoDiv container">
              <div id="videoBlock">
                <p>
                  <video
                    className="col-sm-8"
                    preload="preload"
                    id="background-video"
                    autoPlay="autoplay"
                    loop="loop"
                    muted
                  >
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                  </video>
                </p>
                <div id="videoMessage">
                  <p className="videoClick">
                    <a href="https://www.hotelsafloat.com/home-away.php">
                      Click For Service{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
