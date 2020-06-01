import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Card, CardBody } from "reactstrap";
import Donut from "../../variables/doughnut";
import StatisticsCard from "components/StatisticsCard/StatisticsCard";
import WorstPerformerCard from "components/StatisticsCard/WorstPerformerCard";
import { Bar } from "react-chartjs-2";
import TableList from "variables/tablelist";

const Section4SubTab3 = (props) => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const data = {
    tableHeading: ["Date", "Shift", "Issue", "Remark"],
    tableData: [
      ["12/12/20", "A-Shift", "Issue 1", "Lorem Ipsum Dolor Sit"],
      ["12/12/20", "A-Shift", "Issue 1", "Lorem Ipsum Dolor Sit"],
    ],
  };

  return (
    <div className="content">
      <div>
        <Row className="top-graph">
          <Col
            md="8"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="pt-5 pb-5">
              <Bar />
            </div>
          </Col>
          <Col md="3">
            <StatisticsCard />
            <WorstPerformerCard />
          </Col>
        </Row>
      </div>
      <Row>
        <Col md="8">
          <img
            alt=""
            src={require("assets/img/filter1.svg")}
            style={{ float: "right", marginBottom: "1%" }}
          />
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <Card className="cardUser p-3">
            <TableList
              toggle={toggle}
              tableHead={data.tableHeading}
              tableData={data.tableData}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Section4SubTab3;
