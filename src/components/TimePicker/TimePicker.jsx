import React from "react";
import TimePicker from "rc-time-picker";
import moment from "moment";
import "rc-time-picker/assets/index.css";

const format = "h:mm a";

const now = moment().hour(0).minute(0);
const onChange = (value) => {
  console.log(value && value.format(format));
};
const TimeDropdown = () => {
  return (
    <TimePicker
      showSecond={false}
      defaultValue={now}
      //   className=""
      onChange={onChange}
      format={format}
      use12Hours
      inputReadOnly
    />
  );
};

export default TimeDropdown;
