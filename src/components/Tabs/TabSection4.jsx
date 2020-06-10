import React, { useState } from "react";
import "./tabs.css";
import {
  Row,
  Col,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Donut from "../../variables/doughnut";
import DatePick from "components/DateRange/DatePicker";
import DropdownBtn from "components/DropdownBtn";
import Section3Tab from "./Section3Tab";
import Section4Tab from "./Section4Tab";

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

const TabsSection4 = (props) => {
  const [dropdownVal, setDropdownVal] = useState({});
  const updateDropdownVal = (val) => setDropdownVal(val);
  const [isOpen, setIsOpen] = useState(false);
  const dateToggle = () => setIsOpen(!isOpen);
  return (
    <div className="content">
      <div>
        <Card className="cardUser mt-2">
          <CardBody>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Col md="3" className="card-row">
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
                    <Card className="cardToggle mt-3 card-collapse">
                      <CardBody>
                        <div className="flex-row">
                          <div className="mb-2 mt-1 mr-3">From</div>{" "}
                          <DatePick />
                          <div className="mb-2 mr-3 mt-1 ml-3">To </div>
                          <DatePick />
                          <div className="radio-btns ml-3">
                            <div className="row">
                              <div className="col-lg-4 col-md-3 col-sm-6">
                                <FormGroup tag="fieldset">
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
                                <FormGroup tag="fieldset">
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
                                <FormGroup tag="fieldset">
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
                          <div className="cardInp buttoncon mb">
                            <button className="button" onClick={dateToggle}>Apply</button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </Col>
              <Col md="3" className="card-row">
                <h6 className="cardsubtext mr-5 pb-3">Machine Category</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  getDropdownVal={() => updateDropdownVal()}
                />
              </Col>
              <Col md="3" className="card-row">
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
        <Section4Tab />
      </div>
    </div>
  );
};

export default TabsSection4;
