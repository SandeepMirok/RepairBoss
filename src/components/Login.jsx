import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    name: "",
    password: ""
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const username = this.state.name;
    const password = this.state.password;

    axios
      .post(`http://192.168.2.160:8080/api/authenticate`, {
        password,
        remrememberMe: false,
        username
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        let token = res.data.id_token;
        console.log(token);
        axios
          .get("http://192.168.2.160:8080/api/account", {
            headers: { Authorization: "Bearer " + token }
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.data.email);
          })
          .catch(err => {
            console.error(err);
          });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Person Name:</label>
          <input type="text" name="name" onChange={this.handleChangeName} />

          <input
            type="text"
            password="password"
            onChange={this.handleChangePassword}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
