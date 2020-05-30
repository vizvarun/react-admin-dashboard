import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropdownBtn = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const initialValue = {
    id: 0,
    value: null,
    label: "Choose",
  };
  const [dropdownValue, setDropdownValue] = useState(initialValue);

  const toggle = () => setOpen(!dropdownOpen);
  const changeDropdownValue = (event) => {
    setDropdownValue({
      label: event.target.name,
      value: event.target.value,
      id: event.target.id,
    });
    props.getDropdownVal(dropdownValue);
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} size={props.size}>
      <DropdownToggle caret className="droptext">
        {dropdownValue.label}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>{props.header}</DropdownItem>
        {props.options.map((option) => (
          <DropdownItem
            value={option.value}
            name={option.label}
            onClick={changeDropdownValue}
            key={option.id}
            id={option.id}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownBtn;
