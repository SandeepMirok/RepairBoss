import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Home from "./Home";
import SignUp from "./signup.js";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<SignUp />, document.getElementById("root"));
registerServiceWorker();
