import React from "react";
import { Table, Card } from "reactstrap";
import "./tabs.css";
import TableList from "variables/tablelist";

const QRTable = (props) => {
  const data = {
    tableHeading: ["Product", "Rejection Reason", "Quantity"],
    tableData: [
      ["Product 1", "RR 1", "20"],
      ["Product 2", "RR 2", "20"],
      ["Product 3", "RR 3", "20"],
    ],
  };
  return (
    <>
      <Card className="cardUser p-2">
        <TableList tableHead={data.tableHeading} tableData={data.tableData} />
      </Card>
    </>
  );
};

export default QRTable;
