import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Card, CardBody } from "reactstrap";
import Donut from "../../variables/doughnut";
import DatePick from "components/DateRange/DatePicker";
import DropdownBtn from "components/DropdownBtn";

const dropdownOptions = [
  {
    value: "opt1",
    label: "Option 1",
  },
  {
    value: "opt2",
    label: "Option 2",
  },
  {
    value: "opt3",
    label: "Option 3",
  },
  {
    value: "opt4",
    label: "Option 4",
  },
];

const TabsSection3 = (props) => {
  return (
    <div className="content">
      <div style={{ marginTop: "8%" }}>
        <Row className="top-graph">
          <Col md="2" sm="6">
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
          <Col md="2" sm="6">
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
          <Col md="2" sm="6">
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
          <Col md="2" sm="6">
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

        <Card className="cardUser mt-2">
          <CardBody>
            <Row>
              <Col md="4">
                <h6 className="cardmaintext mt-4 ml-4 ">Production and Downtime Entry</h6>
              </Col>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5 mt-4">Date</h6>
                <DatePick />
              </Col>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5 pb-3">Machine</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  size=""
                />
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card className="cardUser mt-4">
          <CardBody>
            <Row>
              <Col md="4">
                <h6 className="cardmaintext mt-4 ml-4">Machine & Operator Entry</h6>
              </Col>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5">Machine</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  size=""
                />
              </Col>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5 pb-3">Machine</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  size=""
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default TabsSection3;
