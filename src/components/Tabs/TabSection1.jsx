import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Card, CardBody } from "reactstrap";
import Donut from "../../variables/doughnut";
import DatePick from "components/DateRange/DatePicker";
import DropdownBtn from "components/DropdownBtn";
import Section3Tab from "./Section3Tab";
import Section4Tab from "./Section4Tab";
import { Bar, Bubble } from "react-chartjs-2";
import VerticalLine from "variables/verticalline";
import BubbleChart from "variables/BubbleChart";
import SingleBarChart from "variables/SingleBar";

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
  const [dropdownVal, setDropdownVal] = useState({});
  const updateDropdownVal = (val) => setDropdownVal(val);
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
                  getDropdownVal={() => updateDropdownVal()}
                />
              </Col>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5 pb-3">Machine</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  getDropdownVal={() => updateDropdownVal()}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Row>
          <Col md="6">
            <Card className="cardUser">
              <div className="p-4">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <VerticalLine width={1200} height={400} />
                    </thead>
                  </table>
                </div>
              </div>
            </Card>
          </Col>
          <Col md="6">
            <Card className="cardUser">
              <div className="p-4">
                <SingleBarChart />
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="6">
            <Card className="cardUser">
              <div className="p-4">
                <BubbleChart />
              </div>
            </Card>
          </Col>
          <Col md="6">
            <Card className="cardUser">
              <div className="p-4">
                <SingleBarChart />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TabsSection1;
