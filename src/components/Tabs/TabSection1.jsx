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
                <h6 className="cardsubtext card-sec1 mr-5 pb-3">Machine Category</h6>
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
                      <VerticalLine
                        width={1200}
                        height={400}
                        data={verticleData}
                      />
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
                <div className="table-responsive">
                  <table>
                    <thead>
                      <BubbleChart data={data} width={1200} height={400} />
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
      </div>
    </div>
  );
};

export default TabsSection1;
