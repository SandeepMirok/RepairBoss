import React, { Component } from "react";

import fire from "../../config/FireBase";

import Verifypage from "../Verify/Verifypage";
import LoginVerify from "../Verify/LoginVerify";

//library.add(faEnvelope, faKey);

class IndexVerify extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
  render() {
    return <div>{this.state.user ? <Verifypage /> : <LoginVerify />}</div>;
  }
}

export default IndexVerify;
