import React, { Component } from "react";
import "./style/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Header2 from "./Header2";

import Footer from "./Footer";
import Nav from "./Nav";
import AboutUs from './content/AboutUs'

class Home extends Component {
  render() {
    return (
      <div className="container">
<<<<<<< HEAD
        <Header />
        <Nav />
        <Header2 />

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>About this page</h2>
                <p className="lead">
                  This is a great place to talk about your webpage. This
                  template is purposefully unstyled so you can use it as a
                  boilerplate or starting point for you own landing page
                  designs! This template features:
                </p>
                <ul>
                  <li>
                    Clickable nav links that smooth scroll to page sections
                  </li>
                  <li>
                    Responsive behavior when clicking nav links perfect for a
                    one page website
                  </li>
                  <li>
                    Bootstrap's scrollspy feature which highlights which section
                    of the page you're on in the navbar
                  </li>
                  <li>
                    Minimal custom CSS so you are free to explore your own
                    unique design options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Services we offer</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  optio velit inventore, expedita quo laboriosam possimus ea
                  consequatur vitae, doloribus consequuntur ex. Nemo assumenda
                  laborum vel, labore ut velit dignissimos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Contact us</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  odio fugiat voluptatem dolor, provident officiis, id iusto!
                  Obcaecati incidunt, qui nihil beatae magnam et repudiandae
                  ipsa exercitationem, in, quo totam.
                </p>
              </div>
            </div>
          </div>
        </section>

=======
       <Header/>
        <Nav/>
        <AboutUs/>
>>>>>>> e0f9e3aa46f7d25df3b3ffa986a2197b375038ac
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
