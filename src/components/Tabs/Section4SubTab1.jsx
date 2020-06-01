import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Card, CardBody } from "reactstrap";
import Donut from "../../variables/doughnut";
import StatisticsCard from "components/StatisticsCard/StatisticsCard";
import WorstPerformerCard from "components/StatisticsCard/WorstPerformerCard";

const Section4SubTab1 = (props) => {
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
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="3">
            <StatisticsCard />
            <WorstPerformerCard />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Section4SubTab1;
