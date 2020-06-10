import React from "react";
import Select from "react-select";
import "./DropdownBtn.jsx";

const DropdownBtn = (props) => {
  return <Select options={props.options} />;
};

export default DropdownBtn;
