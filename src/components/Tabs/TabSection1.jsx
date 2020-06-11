import React, { useState } from "react";
import "./tabs.css";
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Collapse,
  Label,
  Input,
} from "reactstrap";
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
  const [isOpen, setIsOpen] = useState(false);
  const dateToggle = () => setIsOpen(!isOpen);
  return (
    <div className="content">
      <div>
        <Card className="cardUser">
          <CardBody>
            <Row>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5 mt-4">Date</h6>
                <div className="">
                  <button
                    type="button"
                    onClick={dateToggle}
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="droptext dropdown-toggle btn btn-secondary btn-date"
                  >
                    Choose
                  </button>
                  <Collapse isOpen={isOpen}>
                    <div className="table-responsive">
                    <Card className="cardToggle mt-3 card-collapse">
                      <CardBody>
                        <div className="flex-row">
                          <div className="mb-2 mt-1 mr-3">From</div>{" "}
                          <DatePick />
                          <div className="mb-2 mr-3 mt-1 ml-3">To </div>
                          <DatePick />
                          <div className="radio-btns ml-3 inp-rad">
                            <div className="row">
                              <div className="col-lg-4 col-md-3 col-sm-6">
                                <FormGroup tag="fieldset" className="dope">
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input
                                        type="radio"
                                        name="radio1"
                                        style={{ minWidth: "max-content" }}
                                      />
                                      Last 7 days
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Last 10 days
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Last 15 days
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Last 30 days
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Last 90 days
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Last 6 month
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Last 1 year
                                    </Label>
                                  </FormGroup>
                                </FormGroup>
                              </div>
                              <div className="col-lg-4 col-md-3 col-sm-6">
                                <FormGroup tag="fieldset" className="dope">
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input
                                        type="radio"
                                        name="radio1"
                                        style={{ minWidth: "max-content" }}
                                      />
                                      Yesterday
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Day before Yesterday
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      This day last week
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Previous week
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Previous month
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Previous year
                                    </Label>
                                  </FormGroup>
                                </FormGroup>
                              </div>
                              <div className="col-lg-4 col-md-3 col-sm-6">
                                <FormGroup tag="fieldset" className="dope">
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input
                                        type="radio"
                                        name="radio1"
                                        style={{ minWidth: "max-content" }}
                                      />
                                      Today
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      Today so far
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      This week
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      This week so far
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      This month
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      This month so far
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      This year
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check className="toggle-label">
                                      <Input type="radio" name="radio1" />
                                      This year so far
                                    </Label>
                                  </FormGroup>
                                </FormGroup>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cardInp buttoncon mb">
                          <button className="button" onClick={dateToggle}>
                            Apply
                          </button>
                        </div>
                      </CardBody>
                    </Card>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <div className="card-row" style={{ marginRight: "5%", paddingLeft: "2.5%" }}>
                <h6 className="cardsubtext card-sec1 mr-5 pb-3">
                  Machine Category
                </h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  getDropdownVal={() => updateDropdownVal()}
                />
              </div>
              <div className="card-row" style={{paddingLeft: "2.5%" }}>
                <h6 className="cardsubtext mr-5 pb-3">Machine</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  getDropdownVal={() => updateDropdownVal()}
                />
              </div>
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
