import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Card, CardBody } from "reactstrap";
import Donut from "../../variables/doughnut";
import StatisticsCard from "components/StatisticsCard/StatisticsCard";
import WorstPerformerCard from "components/StatisticsCard/WorstPerformerCard";
import { Bar } from "react-chartjs-2";
import TableList from 'variables/tablelist';

const Section4SubTab2 = (props) => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const data = {
    tableHeading: ["Data", "Value"],
    tableData: [
      ["Total Day Time", "21600"],
      ["Not Working Time", "-3600"],
      ["Total Working Shift Time", "18000"],
      ["Shutdown Time", "-1200"],
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
    </div>
  );
};

export default Section4SubTab2;
