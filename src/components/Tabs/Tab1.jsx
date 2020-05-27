import React from "react";
import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  Input,
  InputGroup,
  Table,
} from "reactstrap";
import "./tabs.css";
import DropdownBtn from "components/DropdownBtn";
import Donut from "../../variables/charts";

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
                <thead>
                  <tr>
                    <th className="tablehead">User Name</th>
                    <th className="tablehead">Phone Number</th>
                    <th className="tablehead">Type</th>
                    <th className="tablehead">Contractor Name</th>
                    <th className="tablehead">Status</th>
                    <th className="tablehead">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Manish Jain</td>
                    <td>8889997770</td>
                    <td>Payroll</td>
                    <td>N/A</td>
                    <td>
                      <img src={require("../../assets/img/reddot.svg")} />
                    </td>
                    <td>
                      <img src={require("../../assets/img/edit-square.svg")} />
                    </td>
                  </tr>
                  <tr>
                    <td>Manish Jain</td>
                    <td>8889997770</td>
                    <td>Payroll</td>
                    <td>N/A</td>
                    <td>
                      <img src={require("../../assets/img/greendot.svg")} />
                    </td>
                    <td>
                      <img src={require("../../assets/img/edit-square.svg")} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md="4">
              <Card className="cardUser">
                <CardBody>
                  <div className="inp-grp">
                    <CardText>
                      <h5 className="cardheadtext">Create New User</h5>
                    </CardText>
                    <div className="cardInp">
                      <h6 className="cardsubtext">User Type</h6>
                      <DropdownBtn />
                    </div>
                    <div className="cardInp">
                      <h6 className="cardsubtext">User Name</h6>
                      <InputGroup className="no-border">
                        <Input className="phold" placeholder="Type Here" />
                      </InputGroup>
                    </div>
                    <div className="cardInp">
                      <h6 className="cardsubtext">Phone Number</h6>
                      <InputGroup className="no-border">
                        <Input className="phold" placeholder="Type Here" />
                      </InputGroup>
                    </div>
                    <div className="cardInp">
                      <h6 className="cardsubtext">Contractor Name</h6>
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
                      <Donut />
                    </Col>
                    <Col md="6">
                      <h5 className="cardheadtext">Your overview</h5>
                      <div className="doughnut-graph">
                        <Donut />
                      </div>
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
