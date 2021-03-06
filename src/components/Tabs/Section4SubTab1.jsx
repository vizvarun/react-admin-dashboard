import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Collapse, Card } from "reactstrap";
import Donut from "../../variables/doughnut";
import StatisticsCard from "components/StatisticsCard/StatisticsCard";
import WorstPerformerCard from "components/StatisticsCard/WorstPerformerCard";
import { Bubble, Bar } from "react-chartjs-2";
import ReasonDurationQR from "./ReasonDurationQR";
import RunnerRepeaterQR from "./RunnerRepeaterQR";
import PRTable from "./PRTable";
import OEETable from "./OEETable";
import QRTable from "./QRTable";
import VerticalLine from "variables/verticalline";
import LineChart from "variables/LineChart";
import BubbleChart from "variables/BubbleChart";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
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
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const Section4SubTab1 = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  const toggleCollapseOne = () => {
    setIsOpenOne(!isOpenOne);
    setIsOpenTwo(false);
    setIsOpenThree(false);
    setIsOpenFour(false);
  };

  const toggleCollapseTwo = () => {
    setIsOpenTwo(!isOpenTwo);
    setIsOpenOne(false);
    setIsOpenThree(false);
    setIsOpenFour(false);
  };

  const toggleCollapseThree = () => {
    setIsOpenThree(!isOpenThree);
    setIsOpenOne(false);
    setIsOpenTwo(false);
    setIsOpenFour(false);
  };

  const toggleCollapseFour = () => {
    setIsOpenFour(!isOpenFour);
    setIsOpenOne(false);
    setIsOpenTwo(false);
    setIsOpenThree(false);
  };

  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const verticleData = [
    {
      name: "A Shift",
      Break: 40,
      Start: 24,
      End: 26,
      amt: 24,
    },
    {
      name: "B Shift",
      Break: 30,
      Start: 13,
      End: 32,
      amt: 22,
    },
    {
      name: "C Shift",
      Break: 20,
      End: 27,
      Start: 98,
      amt: 22,
    },
    {
      name: "D Shift",
      Break: 27,
      End: 36,
      Start: 39,
      amt: 20,
    },
    {
      name: "E Shift",
      Break: 18,
      End: 30,
      Start: 48,
      amt: 21,
    },
    {
      name: "F Shift",
      Break: 23,
      End: 22,
      Start: 38,
      amt: 25,
    },
    {
      name: "G Shift",
      Break: 34,
      Start: 43,
      End: 35,
      amt: 21,
    },
  ];

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
            <Row>
              <Col md="3">
                <div className="doughnut-graph">
                  <Donut
                    legendPosition="left"
                    labels={["AR", ""]}
                    data={[35, 75]}
                    bgColor={["#D50C0C", "#fff"]}
                    hoverBgColor={["#D50C0C", "#fff"]}
                    legendDisplay="true"
                  />
                  <div className="cardInp buttoncon mb">
                    <button className="button2" onClick={toggleCollapseOne}>
                      {!isOpenOne ? "View More" : "View Less"}
                    </button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="doughnut-graph">
                  <Donut
                    legendPosition="left"
                    labels={["PR", ""]}
                    data={[55, 45]}
                    bgColor={["#ED692C", "#fff"]}
                    hoverBgColor={["#ED692C", "#fff"]}
                    legendDisplay="true"
                  />
                  <div className="cardInp buttoncon mb">
                    <button className="button2" onClick={toggleCollapseTwo}>
                      {!isOpenTwo ? "View More" : "View Less"}
                    </button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="doughnut-graph">
                  <Donut
                    legendPosition="left"
                    labels={["QR", ""]}
                    data={[15, 85]}
                    bgColor={["#E32B2B", "#fff"]}
                    hoverBgColor={["#E32B2B", "#fff"]}
                    legendDisplay="true"
                  />
                  <div className="cardInp buttoncon mb">
                    <button className="button2" onClick={toggleCollapseThree}>
                      {!isOpenThree ? "View More" : "View Less"}
                    </button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="doughnut-graph">
                  <Donut
                    legendPosition="left"
                    labels={["OEE", ""]}
                    data={[90, 10]}
                    bgColor={["#82CA27", "#fff"]}
                    hoverBgColor={["#82CA27", "#fff"]}
                    legendDisplay="true"
                  />
                  <div className="cardInp buttoncon mb">
                    <button className="button2" onClick={toggleCollapseFour}>
                      {!isOpenFour ? "View More" : "View Less"}
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="3">
            <StatisticsCard />
            <WorstPerformerCard />
          </Col>
        </Row>
        <Row>
          <Collapse isOpen={isOpenOne} className="max-width">
            <Card className="cardUser">
              <Row className="top-graph">
                <Col
                  md="11"
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
              </Row>
            </Card>
            <ReasonDurationQR />
            <RunnerRepeaterQR />
          </Collapse>
          <Collapse isOpen={isOpenTwo} className="max-width">
            <Card className="cardUser">
              <Row className="top-graph">
                <Col
                  md="11"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="pt-5 pb-5">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <VerticalLine
                            width={1400}
                            height={500}
                            data={verticleData}
                          />
                        </thead>
                      </table>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
            <Row>
              <Col>
                <img
                  alt=""
                  src={require("assets/img/filter1.svg")}
                  style={{ float: "right", marginBottom: "2%" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="cardUser p-3">
                  <PRTable />
                </Card>
              </Col>
            </Row>
          </Collapse>
          <Collapse isOpen={isOpenThree} className="max-width">
            <Card className="cardUser">
              <Row className="top-graph">
                <Col
                  md="11"
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
              </Row>
            </Card>
            <Row>
              <Col>
                <img
                  alt=""
                  src={require("assets/img/filter1.svg")}
                  style={{ float: "right", marginBottom: "2%" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="cardUser p-3">
                  <QRTable />
                </Card>
              </Col>
            </Row>
          </Collapse>
          <Collapse isOpen={isOpenFour} className="max-width">
            <Card className="cardUser">
              <Row className="top-graph">
                <Col
                  md="11"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="pt-5 pb-5">
                    <LineChart data={data} />
                  </div>
                </Col>
              </Row>
            </Card>
            <Row>
              <Col>
                <img
                  alt=""
                  src={require("assets/img/filter1.svg")}
                  style={{ float: "right", marginBottom: "2%" }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="cardUser p-3">
                  <OEETable />
                </Card>
              </Col>
            </Row>
          </Collapse>
        </Row>
      </div>
    </div>
  );
};

export default Section4SubTab1;
