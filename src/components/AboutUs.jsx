import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../style/Home.css";
import "../style/content.css";
//import Ace from "../img/Ace.jpg";
import Car1962 from "../img/1962car.jpg";
import Ford from "../img/Ford.jpg";
import Cuban from "../img/Cuban.png";

class AboutUs extends Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="container">
                    <h3 className="title">About Us</h3>
                    <div
                        className=" about-right">
                        <h4>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin established fact that a
                            reader will be distracted Lorem Ipsum when looking at its layout.
                        </h4>
                        <p>
                            Lorem Ipsum was popularised in the 1960s with the release of
                            Letraset sheet content of a page when looking at its layout The
                            point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution is that it has a more of letters, as opposed to using
                            'Content here, content here', making it look like readable
                            English. Many desktop publishing packages and web page editors now
                            use Lorem Ipsum as their default model text, and a search for
                            'lorem ipsum' will uncover many web sites still in their infancy.{" "}
                        </p>
                    </div>

                    <div className="row">
                        <div
                            className="col-lg-4 wow jello"
                            data-wow-offset="60"
                            data-wow-delay=".5s"
                        >
                            <img
                                src={Cuban}
                                className="rounded-circle "
                                alt="Cinque Terre"
                                width="140"
                                height="140"
                                data-wow-delay="1s"
                            />
                            <h2>Heading</h2>
                            <p>
                                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna.
                            </p>
                            <p>
                                <a className="btn btn-secondary" href="" role="button">
                                    View details »
                                </a>
                            </p>
                        </div>
                        <div
                            className="col-lg-4 wow jello"
                            data-wow-offset="60"
                            data-wow-delay=".75s"
                        >
                            <img
                                src={Car1962}
                                className="rounded-circle"
                                alt="Cinque Terre"
                                width="140"
                                height="140"
                            />
                            <h2>Heading</h2>
                            <p>
                                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna.
                            </p>
                            <p>
                                <a className="btn btn-secondary" href="" role="button">
                                    View details »
                                </a>
                            </p>
                        </div>
                        <div
                            className="col-lg-4 wow jello"
                            data-wow-offset="60"
                            data-wow-delay="1.0s"
                        >
                            <img
                                src={Ford}
                                className="rounded-circle"
                                alt="Cinque Terre"
                                width="140"
                                height="140"
                            />
                            <h2>Heading</h2>
                            <p>
                                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna.
                            </p>
                            <p>
                                <a className="btn btn-secondary" href="" role="button">
                                    View details »
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutUs;
