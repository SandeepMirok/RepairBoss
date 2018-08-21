import React from "react";
import ReactDOM from "react-dom";
import FirstPage from "./FirstPage";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./style/index.css";

ReactDOM.render(<FirstPage />, document.getElementById("root"));
registerServiceWorker();
