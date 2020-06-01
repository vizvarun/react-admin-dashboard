import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Card, CardBody } from "reactstrap";
import Donut from "../../variables/doughnut";
import DatePick from "components/DateRange/DatePicker";
import DropdownBtn from "components/DropdownBtn";
import Section3Tab from "./Section3Tab";
import Section4Tab from "./Section4Tab";
import { Bar } from "react-chartjs-2";

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

const TabsSection1 = (props) => {
  return (
    <div className="content">
      <div>
        <Card className="cardUser mt-2">
          <CardBody>
            <Row>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5 mt-4">Date</h6>
                <DatePick />
              </Col>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5 pb-3">Machine Category</h6>
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
        <Row>
          <Col md="6">
            <Card className="cardUser">
              <div className="p-4">
                <Bar />
              </div>
            </Card>
          </Col>
          <Col md="6">
            <Card className="cardUser">
              <div className="p-4">
                <Bar />
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="6">
            <Card className="cardUser">
              <div className="p-4">
                <Bar />
              </div>
            </Card>
          </Col>
          <Col md="6">
            <Card className="cardUser">
              <div className="p-4">
                <Bar />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TabsSection1;
