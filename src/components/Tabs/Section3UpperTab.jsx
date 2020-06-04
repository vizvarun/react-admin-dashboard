import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Row,
  Col,
  Input,
  InputGroup,
  CardText,
} from "reactstrap";
import classnames from "classnames";
import "./tabs.css";
import DropdownBtn from "components/DropdownBtn";
import TimeDropdown from "../TimePicker/TimePicker";

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

const Section3UpperTab = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [dropdownVal, setDropdownVal] = useState({});
  const updateDropdownVal = (val) => setDropdownVal(val);

  return (
    <div>
      <Nav tabs style={{ border: "none" }}>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        // setLoading(true);
                        toggle("1");
                        // setLoading(false);
                      }}
                    >
                      Production Entry
                    </NavLink>
                  </NavItem>
                </th>
                <th>
                  {" "}
                  <NavItem className="navitem-cursor">
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Downtime Entry
                    </NavLink>
                  </NavItem>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="mt-5 mb-4">
            <Row>
              <Col md="4">
                <Card className="cardUser">
                  <CardBody>
                    <div className="inp-grp">
                      <CardText>
                        <h5 className="cardheadtext">Production Entry</h5>
                      </CardText>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          Select Product
                        </h6>
                        <DropdownBtn
                          getDropdownVal={() => updateDropdownVal()}
                          header="User Type"
                          options={dropdownOptions}
                        />
                      </div>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          Total Production
                        </h6>
                        <InputGroup className="no-border">
                          <Input className="phold" placeholder="Type Here" />
                        </InputGroup>
                      </div>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          Rework
                        </h6>
                        <InputGroup className="no-border">
                          <Input className="phold" placeholder="Type Here" />
                        </InputGroup>
                      </div>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          Rejection Reason
                        </h6>
                        <InputGroup className="no-border">
                          <Input className="phold" placeholder="Type Here" />
                        </InputGroup>
                      </div>
                    </div>
                    <div className="cardInp buttoncon mb">
                      <button className="button">Add Entry</button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className="mt-5 mb-4">
            <Row>
              <Col md="4">
                <Card className="cardUser">
                  <CardBody>
                    <div className="inp-grp">
                      <CardText>
                        <h5 className="cardheadtext">Downtime Entry</h5>
                      </CardText>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          Stoppage Reason
                        </h6>
                        <DropdownBtn
                          getDropdownVal={() => updateDropdownVal()}
                          header="User Type"
                          options={dropdownOptions}
                        />
                      </div>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          Sub Stoppage Reason
                        </h6>
                        <DropdownBtn
                          getDropdownVal={() => updateDropdownVal()}
                          header="User Type"
                          options={dropdownOptions}
                        />
                      </div>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          Start Time
                        </h6>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <TimeDropdown />
                        </div>
                      </div>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          End Time
                        </h6>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <TimeDropdown />
                        </div>
                      </div>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          Total Stoppage Reason
                        </h6>
                        <InputGroup className="no-border">
                          <Input className="phold" placeholder="Type Here" />
                        </InputGroup>
                      </div>
                      <div className="cardInp">
                        <h6
                          className="cardsubtext"
                          style={{ fontWeight: "600" }}
                        >
                          Remark
                        </h6>
                        <InputGroup className="no-border">
                          <Input className="phold" placeholder="Type Here" />
                        </InputGroup>
                      </div>
                    </div>
                    <div className="cardInp buttoncon mb">
                      <button className="button">Add User</button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Section3UpperTab;
