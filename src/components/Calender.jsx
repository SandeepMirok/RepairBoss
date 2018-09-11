import React, { Component } from "react";
//import moment from "moment";
import ReactTimeslotCalendar from "react-timeslot-calendar";
import "../style/Home.css";
//import "../style/calender.less";
//import WeekCalendar from "react-week-calendar";

import "react-week-calendar/dist/style.less";
let timeslots = [
  ["1", "2"], // 1:00 AM - 2:00 AM
  ["2", "3"], // 2:00 AM - 3:00 AM
  ["4", "6"], // 4:00 AM - 6:00 AM
  "5", // 5:00 AM
  ["4", "6", "7", "8"] // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
];
class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Time: timeslots
    };
  }

  render() {
    return (
      <div>
        <div className="cal">
          <ReactTimeslotCalendar rendertime={this.state.Time} />
        </div>
      </div>
    );
  }
}
export default MyApp;
