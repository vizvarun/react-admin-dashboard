import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  Input,
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Collapse,
} from "reactstrap";
import "./tabs.css";
import Donut from "../../variables/doughnut";
import TableList from "variables/tablelist";
import DateRange from "components/DateRange/DateRange";

const Tab5 = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const filterToggle = () => setIsOpen(!isOpen);
  const [modal, setModal] = useState(false);

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const calendarToggle = () => setIsOpenCalendar(!isOpenCalendar);
  const toggle = () => setModal(!modal);
  const data = {
    tableHeading: [
      "Reason Code",
      "Reason Name",
      "Scheduled Loss",
      "Status",
      "Edit",
    ],
    tableData: [
      ["ABCD345", "Break Down", "No", true],
      ["XYZ123", "Lunch Break", "Yes", false],
    ],
  };

  return (
    <>
      <div className="content tabcon">
        <Row>
          <Col md="8">
            <div className="filtericoncon">
              <img
                alt=""
                src={require("assets/img/filter1.svg")}
                className="filtericon"
              />
              <img
                alt=""
                src={require("assets/img/filter2.svg")}
                className="filtericon"
                onClick={filterToggle}
              />
            </div>
            <Collapse isOpen={isOpen}>
              <Card className="cardToggle">
                <CardBody>
                  <FormGroup tag="fieldset">
                    <FormGroup check>
                      <Label check className="toggle-label">
                        <Input type="radio" name="radio1" />
                        Scheduled Loss
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check className="toggle-label">
                        <Input type="radio" name="radio1" />
                        Active
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </CardBody>
              </Card>
            </Collapse>

            <TableList
              toggle={toggle}
              tableHead={data.tableHeading}
              tableData={data.tableData}
            />
          </Col>
          <Col md="4">
            <Card className="cardUser">
              <CardBody>
                <div className="inp-grp">
                  <CardText>
                    <h5 className="cardheadtext">Add new Stoppage Reason</h5>
                  </CardText>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Reason Code</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                    </InputGroup>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Reason Name</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                    </InputGroup>
                  </div>
                  <div className="cardInp">
                    <div
                      style={{
                        width: "100%",
                      }}
                      className="flex-start"
                    >
                      <div className="flex-start" style={{ width: "inherit" }}>
                        <input type="radio" id="yes" name="loss" value="yes" />
                        <label
                          className="mb-0 label-radio"
                          for="yes"
                          style={{ fontSize: "0.8rem" }}
                        >
                          Scheduled Loss
                        </label>
                      </div>
                      <div className="flex-start" style={{ width: "inherit" }}>
                        <input type="radio" id="no" name="loss" value="no" />
                        <label
                          className="mb-0 label-radio"
                          for="no"
                          style={{ fontSize: "0.8rem" }}
                        >
                          UnScheduled Loss
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cardInp buttoncon mb">
                  <button className="button">Add Reason</button>
                </div>
              </CardBody>
            </Card>

            <Card className="cardUser2">
              <div className="iconright">
                <img
                  alt=""
                  src={require("assets/img/filter2.svg")}
                  className="filtericon2"
                  onClick={calendarToggle}
                />
              </div>
              <Collapse isOpen={isOpenCalendar}>
                <Card className="cardToggle">
                  <CardBody>
                    <FormGroup tag="fieldset">
                      <FormGroup check>
                        <Label check className="toggle-label">
                          <Input type="radio" name="radio1" />
                          Last 7 days
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check className="toggle-label">
                          <Input type="radio" name="radio1" />
                          Last 30 days
                        </Label>
                      </FormGroup>
                    </FormGroup>
                    <DateRange />
                  </CardBody>
                </Card>
              </Collapse>
              <div className="internalrow">
                <Row>
                  <Col md="6">
                    <h5 className="cardheadtext">Production House</h5>
                    <div className="doughnut-graph">
                      <Donut
                        legendPosition="bottom"
                        labels={["Scheduled", "UnScheduled"]}
                        data={[70, 30]}
                        bgColor={["#336481", "#7ABEBA"]}
                        hoverBgColor={["#336481", "#7ABEBA"]}
                        legendDisplay="true"
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <h5 className="cardheadtext">Your overview</h5>
                    <div className="doughnut-graph">
                      <Donut
                        legendPosition="bottom"
                        labels={["Scheduled", "UnScheduled"]}
                        data={[85, 15]}
                        bgColor={["#8D5CF6", "#FAD84A"]}
                        hoverBgColor={["#8D5CF6", "#FAD84A"]}
                        legendDisplay="true"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
        <Modal centered isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} className="modalhead">
            Edit Stoppage Reason
          </ModalHeader>
          <ModalBody>
            <div className="inp-grp">
              <div className="cardInp">
                <h6 className="cardsubtext">Reason Code</h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Reason Name</h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <div
                  style={{
                    width: "60%",
                  }}
                  className="flex-start"
                >
                  <h6
                    className="cardsubtext"
                    style={{ marginBottom: 0, marginRight: "10%" }}
                  >
                    Scheduled Loss
                  </h6>
                  <div className="flex-start" style={{ width: "inherit" }}>
                    <input type="radio" id="yes" name="loss" value="yes" />
                    <label className="mb-0 label-radio" for="yes">
                      Yes
                    </label>
                  </div>
                  <div className="flex-start" style={{ width: "inherit" }}>
                    <input type="radio" id="no" name="loss" value="no" />
                    <label className="mb-0 label-radio" for="no">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="cardInp">
                <div
                  style={{
                    width: "60%",
                  }}
                  className="flex-start"
                >
                  <h6
                    className="cardsubtext"
                    style={{ marginBottom: 0, marginRight: "10%" }}
                  >
                    Status
                  </h6>
                  <div className="flex-start" style={{ width: "inherit" }}>
                    <input type="radio" id="yes" name="status" value="yes" />
                    <label className="mb-0 label-radio" for="yes">
                      Yes
                    </label>
                  </div>
                  <div className="flex-start" style={{ width: "inherit" }}>
                    <input type="radio" id="no" name="status" value="no" />
                    <label className="mb-0 label-radio" for="no">
                      No
                    </label>
                  </div>
                </div>
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

export default Tab5;
