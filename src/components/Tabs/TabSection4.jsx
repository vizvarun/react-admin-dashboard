import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Card, CardBody, Collapse } from "reactstrap";
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
                    <Card className="cardToggle mt-3">
                      <CardBody>
                        <div className="mb-2">To</div> <DatePick />
                        <div className="mt-3">
                          <div className="mb-2">From </div>
                          <DatePick />
                        </div>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
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
        <Section4Tab />
      </div>
    </div>
  );
};

export default TabsSection4;
