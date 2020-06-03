import React from "react";
import { Table, Card } from "reactstrap";
import "./tabs.css";
import TableList from "variables/tablelist";

const OEETable = (props) => {
  const data = {
    tableHeading: ["Date", "Shift", "AR", " PR", "QR", "OEE"],
    tableData: [
      ["12/12/20", "A-Shift", "20", " 4", "4", "4"],
      ["12/12/20", "A-Shift", "20", " 5", "7", "1"],
      ["12/12/20", "A-Shift", "20", " 2", "6", "5"],
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

export default OEETable;
