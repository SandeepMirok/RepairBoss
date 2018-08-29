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
        <form>
          <div class="form-group col-md-4">
            <label for="inputState">Brand</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div class="form-group col-md-4">
            <label for="inputState">Model</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div class="form-group col-md-4">
            <label for="inputState">Year</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
                Find
              </button>
            </div>
          </div>
        </form>

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
