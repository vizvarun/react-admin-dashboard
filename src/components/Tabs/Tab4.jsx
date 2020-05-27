import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  Input,
  InputGroup,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./tabs.css";
import DropdownBtn from "components/DropdownBtn";
import Donut from "../../variables/doughnut";
import VerticalLine from "variables/verticalline";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";

const Tab4 = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
                  <th className="tablehead">Shift Name</th>
                  <th className="tablehead">Shift Description</th>
                  <th className="tablehead">Start Time</th>
                  <th className="tablehead">End Time</th>
                  <th className="tablehead">Overnight</th>
                  <th className="tablehead">Status</th>
                  <th className="tablehead">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A-Shift</td>
                  <td>Lorem Ipsum Dolor Sit</td>
                  <td>07:00</td>
                  <td>16:00</td>
                  <td>No</td>
                  <td>
                    <img src={require("../../assets/img/reddot.svg")} />
                  </td>
                  <td>
                    <img
                      className="pointer-cursor"
                      onClick={toggle}
                      src={require("../../assets/img/edit-square.svg")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>A-Shift</td>
                  <td>Lorem Ipsum Dolor Sit</td>
                  <td>07:00</td>
                  <td>16:00</td>
                  <td>No</td>
                  <td>
                    <img src={require("../../assets/img/greendot.svg")} />
                  </td>
                  <td>
                    <img
                      className="pointer-cursor"
                      onClick={toggle}
                      src={require("../../assets/img/edit-square.svg")}
                    />
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
                    <h5 className="cardheadtext">Add new Shift</h5>
                  </CardText>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Shift Name</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                    </InputGroup>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Shift Description</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                    </InputGroup>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Start Time</h6>
                    <DropdownBtn />
                    <DropdownBtn />
                    <img src={require("assets/img/plus-circle.svg")} />
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Break Time</h6>
                    <img src={require("assets/img/plus-circle.svg")} />
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">End Time</h6>
                    <DropdownBtn />
                    <DropdownBtn />
                    <img src={require("assets/img/plus-circle.svg")} />
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Overnight</h6>
                    <form>
                      <input type="radio" value="yes" />
                      Yes
                      <input type="radio" value="no" />
                      No
                    </form>
                  </div>
                </div>
                <div className="cardInp buttoncon mb">
                  <button className="button">Add Shift</button>
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
                    <VerticalLine />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
        <Modal centered isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} className="modalhead">
            Edit Existing Product
          </ModalHeader>
          <ModalBody>
            <div className="inp-grp">
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
              <div className="cardInp">
                <h6 className="cardsubtext">Status</h6>
                <form>
                  <input type="radio" value="active" />
                  Active
                  <input type="radio" value="inactive" />
                  Inactive
                </form>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="cardInp buttoncon mb">
              <button className="button" onClick={toggle}>
                Save
              </button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default Tab4;
