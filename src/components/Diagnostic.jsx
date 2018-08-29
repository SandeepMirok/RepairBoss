import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import Search from "./Search";

class Diagnostic extends Component {
  state = {
    query: ""
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <div className="container-D">
        <Header />
        <Nav />
        <h1>Diagnostic Page</h1>
        <form>
          <input
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
        </form>
        <Search />
        <Footer />
      </div>
    );
  }
}
Diagnostic.propTypes = {
  textChange: PropTypes.func
};

export default Diagnostic;
