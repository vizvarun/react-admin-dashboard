import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  Input,
  InputGroup,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.jsx";

import "./tabs.css";
import DropdownBtn from "components/DropdownBtn";

class Tab1 extends React.Component {
  render() {
    return (
      <>
        <div className="content tabcon">
          <Row>
            <Col md="8">
              <div className="filtericoncon">
                <img
                  src={require("assets/img/filter1.svg")}
                  className="filtericon"
                />
                <img
                  src={require("assets/img/filter2.svg")}
                  className="filtericon"
                />
              </div>
            </Col>
            <Col md="4">
              <Card className="cardUser">
                <CardBody>
                  <CardText>
                    <h5 className="cardheadtext">Create New User</h5>
                    <div className="cardInp">
                      <h6 className="cardsubtext">User Type</h6>
                      <div className="drop">
                        <DropdownBtn />
                      </div>
                    </div>
                    <div className="cardInp">
                      <h6 className="cardsubtext">User Name</h6>
                      <InputGroup className="no-border cardtextInp">
                        <Input placeholder="Type Here" />
                      </InputGroup>
                    </div>
                    <div className="cardInp">
                      <h6 className="cardsubtext">Phone Number</h6>
                      <InputGroup className="no-border cardtextInp">
                        <Input placeholder="Type Here" />
                      </InputGroup>
                    </div>
                    <div className="cardInp">
                      <h6 className="cardsubtext">Contractor Name</h6>
                      <InputGroup className="no-border cardtextInp">
                        <Input placeholder="Type Here" />
                      </InputGroup>
                    </div>
                    <div className="cardInp buttoncon mb">
                      <button className="button">Add User</button>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tab1;
