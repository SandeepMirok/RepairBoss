import React from "react";
import "../js/Calendar.js";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class TimeTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <div>
        {/*
        <div className="row">
        
          <div className="input-field col-sm-6">
            <select>
              {this.state.options.map(function(item) {
                return <option value={item.value}>{item.Time}</option>;
              })}
              onChange=
              {this.handleChangePrimaryphone}
            </select>

            <label htmlFor="time" className="required">
              Time
            </label>
          </div>

          <div className="input-field col-sm-6">
            <input
              id="date"
              name="date"
              className="form-control"
              type="date"
              onChange={this.handleChangeSecondaryphone}
            />
            <label for="from">From</label>
            <input type="text" className="from" name="from" />
            <label htmlFor="date">Date</label>
          </div>
        </div>
            */}
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        ;
      </div>
    );
  }
}
export default TimeTest;
