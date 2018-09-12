import React from "react";
//import axios from "axios";
import Login from "./Login";

export default class Axios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
  }

  /*componentDidMount() {
    axios.post("http://192.168.2.160:8080/api/authenticate", {
      password: "andre",
      rememberMe: false,
      username: "andre"
    });
  }*/

  render() {
    return (
      <div>
        Here it is:
        {this.state.data}
        <Login />
      </div>
    );
  }
}
