import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Collapse, CardBody, Card } from "reactstrap";
import Donut from "../../variables/doughnut";
import classnames from "classnames";
import StatisticsCard from "components/StatisticsCard/StatisticsCard";
import WorstPerformerCard from "components/StatisticsCard/WorstPerformerCard";
import { Bubble, Bar } from "react-chartjs-2";
import ReasonDurationQR from "./ReasonDurationQR";
import RunnerRepeaterQR from "./RunnerRepeaterQR";
import PRTable from "./PRTable";
import TableList from "variables/tablelist";
import OEETable from "./OEETable";
import QRTable from "./QRTable";

const Section4SubTab1 = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [isOpenOne, setIsOpenOne] = useState(false);
  const toggleCollapseOne = () => setIsOpenOne(!isOpenOne);

  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const toggleCollapseTwo = () => setIsOpenTwo(!isOpenTwo);

  const [isOpenThree, setIsOpenThree] = useState(false);
  const toggleCollapseThree = () => setIsOpenThree(!isOpenThree);

  const [isOpenFour, setIsOpenFour] = useState(false);
  const toggleCollapseFour = () => setIsOpenFour(!isOpenFour);

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
                    <Bubble />
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
                    <Bar />
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
                    <Bar />
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
                    <Bar />
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
