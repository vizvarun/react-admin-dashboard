import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Card, CardBody, CardText } from "reactstrap";
import Donut from "../../variables/doughnut";
import StatisticsCard from "components/StatisticsCard/StatisticsCard";
import WorstPerformerCard from "components/StatisticsCard/WorstPerformerCard";
import { Bar, Bubble } from "react-chartjs-2";
import TableList from "variables/tablelist";
import ReasonDuration from "./ReasonDuration";
import RunnerRepeater from "./RunnerRepeater";
import BubbleChart from "variables/BubbleChart";

const Section4SubTab4 = (props) => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const data = {
    tableHeading: ["Reason", "Sub Reason", "Schedule Loss", "Frequency"],
    tableData: [
      ["R01", "SB1", "20", "4"],
      ["R20", "SB2", "20", "7"],
      ["R3", "SB3", "20", "2"],
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
              <BubbleChart />
            </div>
          </Col>
          <Col md="3">
            <StatisticsCard />
            <WorstPerformerCard />
          </Col>
        </Row>

        <ReasonDuration />
        <RunnerRepeater />
      </div>
    </div>
  );
};

export default Section4SubTab4;
