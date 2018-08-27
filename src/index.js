import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import App from "./App";
import SignUp from "./components/SignUp";
import Diagnostic from "./components/Diagnostic";

import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./style/index.css";
import { Route, HashRouter, NavLink } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <div>
      <li>
        {" "}
        <NavLink to="/Home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/App">App</NavLink>
      </li>
      <li>
        <NavLink to="/SignUp">Login</NavLink>
      </li>
      <li>
        <NavLink to="/Diagnostic">Diagnostic</NavLink>
      </li>

      <Route path="/" exact={true} component={Home} />
      <Route path="/Home" exact={true} component={Home} />
      <Route path="/App" component={App} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Diagnostic" component={Diagnostic} />
    </div>
  </HashRouter>,
  document.getElementById("root")
);

//ReactDOM.render(<FirstPage />, document.getElementById("root"));
registerServiceWorker();
