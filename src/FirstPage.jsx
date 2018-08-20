import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Home from "./Home";
import SignUp from "./content/signup";
import { Route, NavLink, HashRouter } from "react-router-dom";
class FirstPage extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/App">App</NavLink>
          </li>
          <li>
            <NavLink to="/SignUp">Login</NavLink>
          </li>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Home" exact={true} component={Home} />
          <Route path="/App" component={App} />
          <Route path="/SignUp" component={SignUp} />
        </div>
      </HashRouter>
    );
  }
}

export default FirstPage;
