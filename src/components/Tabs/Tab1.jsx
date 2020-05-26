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
  Table
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
			  <Table responsive>
			  <thead className="userInp">
				<tr>
				<Card className="cardmain">
                  <CardBody>
                    <CardText>
                      <div className="toptext">
                        <h5 className="cardheadtext2">User Name</h5>
                        <h5 className="cardheadtext2">Phone Number</h5>
                        <h5 className="cardheadtext2">Type</h5>
                        <h5 className="cardheadtext2">Contractor Name</h5>
                        <h5 className="cardheadtext2">Status</h5>
						<h5 className="cardheadtext2">&nbsp;</h5>
                      </div>
                    </CardText>
                  </CardBody>
                </Card>
				</tr>
				</thead>
				<tbody className="userInp">
				<Card className="carddetails">
                  <CardBody>
                    <CardText>
                      <div className="toptext">
                        <h5 className="carddetailtext">User Name</h5>
                        <h5 className="carddetailtext">Phone Number</h5>
                        <h5 className="carddetailtext">Type</h5>
                        <h5 className="carddetailtext">Contractor Name</h5>
                        <img
                          src={require("assets/img/greendot.svg")}
                          className="reddot"
                        />
                        <img
                          src={require("assets/img/edit-square.svg")}
                          className="editicon"
                        />
                      </div>
                    </CardText>
                  </CardBody>
                </Card>
				</tbody>
			  </Table>
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

              <Card className="cardUser2">
                <div className="iconright">
                  <img
                    src={require("assets/img/filter2.svg")}
                    className="filtericon2"
                  />
                </div>
                <div className="internalrow">
                  <Row>
                    <Col md="6">
                      <h5 className="cardheadtext">Production House</h5>
                    </Col>
                    <Col md="6">
                      <h5 className="cardheadtext">Your overview</h5>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tab1;
