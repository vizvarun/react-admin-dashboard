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
    labels: ["January"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [{ x: 10, y: 20, r: 5 }],
      },
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
              <BubbleChart data={data} />
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
