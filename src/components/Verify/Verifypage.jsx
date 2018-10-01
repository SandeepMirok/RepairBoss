import React, { Component } from "react";
import fire from "../../config/FireBase";
import NavVerify from "../Verify/NavVerify";

import "../../style/content.css";

class Verifypage extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <NavVerify />
        <div className="space">
          <h1>Vefify Page</h1>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Auto Shop Name</th>
                <th scope="col">Owner Name</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Email Address</th>
                <th scope="col">Verified</th>
                <th scope="col">Approval Status</th>
                <th scope="col">Email Notify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Andre</td>
                <td>Andre</td>
                <td>666-666-666</td>
                <td>andre@andre.com</td>
                <td>
                  <div class="radio">
                    <input type="radio" name="radios" id="radio1" />
                    <label for="radio1">Yes</label>
                    <input type="radio" name="radios" id="radio2" />
                    <label for="radio2">No</label>
                  </div>
                </td>
                <td>Verifia</td>
                <td>
                  <button type="button" class="btn btn-warning">
                    Send
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Andre</td>
                <td>Andre</td>
                <td>666-666-666</td>
                <td>andre@andre.com</td>
                <td>
                  <div class="radio">
                    <input type="radio" name="radios2" id="radio2" />
                    <label for="radio4">Yes</label>
                    <input type="radio" name="radios2" id="radio2" />
                    <label for="radio4">No</label>
                  </div>
                </td>
                <td>Verifia</td>
                <td>
                  <button type="button" class="btn btn-warning">
                    Send
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Andre</td>
                <td>Andre</td>
                <td>666-666-666</td>
                <td>andre@andre.com</td>
                <td>
                  <div class="radios">
                    <input type="radio" name="radios3" id="radio3" />
                    <label for="radio6">Yes</label>
                    <input type="radio" name="radios3" id="radio3" />
                    <label for="radio6">No</label>
                  </div>
                </td>
                <td>Verifia</td>
                <td>
                  <button type="button" class="btn btn-warning">
                    Send
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Andre</td>
                <td>Andre</td>
                <td>666-666-666</td>
                <td>andre@andre.com</td>
                <td>
                  <div class="radios">
                    <input type="radio" name="radios3" id="radio3" />
                    <label for="radio6">Yes</label>
                    <input type="radio" name="radios3" id="radio3" />
                    <label for="radio6">No</label>
                  </div>
                </td>
                <td>Verifia</td>
                <td>
                  <button type="button" class="btn btn-warning">
                    Send
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Andre</td>
                <td>Andre</td>
                <td>666-666-666</td>
                <td>andre@andre.com</td>
                <td>
                  <div class="radios">
                    <input type="radio" name="radios3" id="radio3" />
                    <label for="radio6">Yes</label>
                    <input type="radio" name="radios3" id="radio3" />
                    <label for="radio6">No</label>
                  </div>
                </td>
                <td>Verifia</td>
                <td>
                  <button type="button" class="btn btn-warning">
                    Send
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Andre</td>
                <td>Andre</td>
                <td>666-666-666</td>
                <td>andre@andre.com</td>
                <td>
                  <div class="radios">
                    <input type="radio" name="radios3" id="radio3" />
                    <label for="radio6">Yes</label>
                    <input type="radio" name="radios3" id="radio3" />
                    <label for="radio6">No</label>
                  </div>
                </td>
                <td>Verifia</td>
                <td>
                  <button type="button" class="btn btn-warning">
                    Send
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">
            © 2018 Copyright:
            <a href="https://mdbootstrap.com/bootstrap-tutorial/">
              {" "}
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Verifypage;
