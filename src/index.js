import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Home from "./Home";
import FirstPage from "./FirstPage";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<FirstPage />, document.getElementById("root"));
registerServiceWorker();
