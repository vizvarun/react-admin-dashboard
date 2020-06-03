import React, { Component, useState } from "react";
import ProductionTable from "../../variables/productionTable";

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
      ],
    ],
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div>
        <ProductionTable
          toggle={toggle}
          tableHead={data.tableHeading}
          tableData={data.tableData}
        />
      </div>
    </>
  );
};

export default ProductionTab;
