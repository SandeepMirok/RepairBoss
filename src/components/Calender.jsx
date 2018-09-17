import React, { Component } from "react";
import axios from "axios";
//import moment from "moment";
import "../style/Home.css";
//import "../style/calender.less";
//import WeekCalendar from "react-week-calendar";
import "react-week-calendar/dist/style.less";

import FullCalendar from "fullcalendar-reactwrapper";

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          title: "All Day Event",
          start: "2017-05-01"
        },
        {
          title: "Andre Event",
          start: "2017-05-07",
          end: "2017-05-10"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2017-05-09T16:00:00"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: "2017-05-16T16:00:00"
        },
        {
          title: "Conference",
          start: "2017-05-11",
          end: "2017-05-13"
        },
        {
          title: "Meeting",
          start: "2017-05-12T10:30:00",
          end: "2017-05-12T12:30:00"
        },
        {
          title: "Birthday Party",
          start: "2017-05-13T07:00:00"
        },
        {
          title: "Click for Google",
          url: "http://google.com/",
          start: "2017-05-28"
        }
      ]
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get("http://192.168.2.32:8080/api/schedule-mechanics")
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    //this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div id="example-component">
        <FullCalendar
          id="your-custom-ID"
          header={{
            left: "prev,next today myCustomButton",
            center: "title",
            right: "month,basicWeek,basicDay"
          }}
          defaultDate={"2017-05-12"}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={this.state.events}
        />
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
export default Calender;
