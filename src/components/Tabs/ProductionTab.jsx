import React, { Component, useState } from "react";
import TableList from "../../variables/tablelist";

const ProductionTab = () => {
  const data = {
    tableHeading: [
      "Date",
      "Shift",
      "Machine",
      "Operator",
      "Product",
      "Total Production",
      "Rework",
      "Total Rejection",
      "Status",
      "Edit",
      "Approve",
    ],
    tableData: [
      [
        "12/12/20",
        "A-Shift",
        "Payroll",
        "Ram Pal",
        "Velvet",
        "1000",
        "20",
        "60",
        true,
      ],
      [
        "12/12/20",
        "A-Shift",
        "Payroll",
        "Ram Pal",
        "Velvet",
        "1000",
        "20",
        "60",
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

export default ProductionTab;
