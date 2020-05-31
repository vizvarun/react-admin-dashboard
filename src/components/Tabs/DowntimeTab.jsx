import React, { Component, useState } from "react";
import TableList from "../../variables/tablelist";

const DowntimeTab = () => {
  const data = {
    tableHeading: [
      "Date",
      "Shift",
      "Machine",
      "Operator",
      "Stoppage Reason",
      "Sub Stoppage Reason",
      "Start Time",
      "End Time",
      "Total Stoppage Reason",
      "Remarks",
      "Status",
      "Edit"
    ],
    tableData: [
      [
        "12/12/20",
        "A-Shift",
        "Payroll",
        "Ram Pal",
        "Break Down",
        "Fault",
        "10:00",
        "14:00",
        "20",
        "Lorem Ipsum",
        true,
      ],
      [
        "12/12/20",
        "A-Shift",
        "Payroll",
        "Ram Pal",
        "Break Down",
        "Fault",
        "10:00",
        "14:00",
        "20",
        "Lorem Ipsum",
        false,
      ],
    ],
  };
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div>
        <TableList
          toggle={toggle}
          tableHead={data.tableHeading}
          tableData={data.tableData}
        />
      </div>
    </>
  );
};

export default DowntimeTab;
