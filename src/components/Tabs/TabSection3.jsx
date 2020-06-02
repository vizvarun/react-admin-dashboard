import React, { useState } from "react";
import "./tabs.css";
import { Row, Col, Card, CardBody } from "reactstrap";
import Donut from "../../variables/doughnut";
import DatePick from "components/DateRange/DatePicker";
import DropdownBtn from "components/DropdownBtn";
import Section3Tab from "./Section3Tab";

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
  const [dropdownVal, setDropdownVal] = useState({});
  const updateDropdownVal = (val) => setDropdownVal(val);
  return (
    <div className="content">
      <div style={{ marginTop: "2%" }}>
        <Row className="top-graph">
          <Col md="2">
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
          <Col md="2">
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
          <Col md="2">
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
          <Col md="2">
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
                <h6 className="cardmaintext mt-4 ml-4 ">
                  Production and Downtime Entry
                </h6>
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
                  getDropdownVal={() => updateDropdownVal()}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card className="cardUser mt-4">
          <CardBody>
            <Row>
              <Col md="4">
                <h6 className="cardmaintext mt-4 ml-4"></h6>
              </Col>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5">Machine</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  getDropdownVal={() => updateDropdownVal()}
                />
              </Col>
              <Col md="4" className="card-row">
                <h6 className="cardsubtext mr-5 pb-3">Operator</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  getDropdownVal={() => updateDropdownVal()}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
        <div className="mb-4" style={{ float: "right" }}>
          <button className="button mt-2">Import Excel</button>
          <div className="mt-2 icon-toggle">
            <img
              alt=""
              src={require("assets/img/filter1.svg")}
              className="filtericon3"
            />
            <img
              alt=""
              src={require("assets/img/filter2.svg")}
              className="filtericon3"
            />
          </div>
        </div>
        <div>
          <Section3Tab />
        </div>
      </div>
    </div>
  );
};

export default TabsSection3;
