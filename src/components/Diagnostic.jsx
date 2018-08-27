import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";

class Diagnostic extends Component {
  state = {
    query: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <div className="container">
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

        <Footer />
      </div>
    );
  }
}

export default Diagnostic;
