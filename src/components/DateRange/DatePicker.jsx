import React, { Component } from "react";
import DatePicker from "react-date-picker";

export default class DatePick extends Component {
  state = {
    value: new Date(),
  };

  onChange = (value) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div>
        <DatePicker
          calendarAriaLabel="Toggle calendar"
          clearAriaLabel="Clear value"
          dayAriaLabel="Day"
          monthAriaLabel="Month"
          nativeInputAriaLabel="Date"
          onChange={this.onChange}
          value={value}
          yearAriaLabel="Year"
        />
      </div>
    );
  }
}
