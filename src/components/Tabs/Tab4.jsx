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
  Collapse,
  FormGroup,
  Label,
} from "reactstrap";
import "./tabs.css";
import DropdownBtn from "components/DropdownBtn";
import VerticalLine from "variables/verticalline";
import TableList from "variables/tablelist";
import DateRange from "components/DateRange/DateRange";
import TimeDropdown from "components/TimePicker/TimePicker";
import BreaktimeModal from "../ModalComp/BreaktimeModal";

const Tab4 = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const filterToggle = () => setIsOpen(!isOpen);

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const calendarToggle = () => setIsOpenCalendar(!isOpenCalendar);

  const [breaktimeModal, setBreaktimeModal] = useState(false);

  const toggleBreaktimeModal = () => setBreaktimeModal(!breaktimeModal);

  const toggle = () => setModal(!modal);
  const data = {
    tableHeading: [
      "Shift Name",
      "Shift Description",
      "Start Time",
      "End Time",
      "Overtime",
      "Status",
      "Edit",
    ],
    tableData: [
      ["A-Shift", "Lorem Ipsum Dolor Sit", "07:00", "16:00", "No", true],
      ["A-Shift", "Lorem Ipsum Dolor Sit", "09:00", "18:00", "No", false],
    ],
  };
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
                        Overnight
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
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <TimeDropdown />

                      <img src={require("assets/img/plus-circle.svg")} alt="" />
                    </div>
                  </div>
                  <div className="cardInp">
                    <div
                      style={{
                        width: "40%",
                      }}
                      className="flex-start"
                    >
                      <h6 className="cardsubtext" style={{ marginBottom: 0 }}>
                        Break Time
                      </h6>
                      <img
                        alt=""
                        style={{ marginLeft: "10%", cursor: "pointer" }}
                        src={require("assets/img/plus-circle.svg")}
                        onClick={toggleBreaktimeModal}
                      />
                    </div>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">End Time</h6>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <TimeDropdown />
                      <img src={require("assets/img/plus-circle.svg")} alt="" />
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
                        Overnight
                      </h6>
                      <div className="flex-start" style={{ width: "inherit" }}>
                        <input
                          type="radio"
                          id="yes"
                          name="overnight"
                          value="yes"
                        />
                        <label className="mb-0 label-radio" for="yes">
                          Yes
                        </label>
                      </div>
                      <div className="flex-start" style={{ width: "inherit" }}>
                        <input
                          type="radio"
                          id="no"
                          name="overnight"
                          value="no"
                        />
                        <label className="mb-0 label-radio" for="no">
                          No
                        </label>
                      </div>
                    </div>
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
                  <Col style={{ maxWidth: "100%" }}>
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <VerticalLine />
                        </thead>
                      </table>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
        <BreaktimeModal
          toggle={toggleBreaktimeModal}
          modal={breaktimeModal}
          className={className}
        />
        <Modal centered isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} className="modalhead">
            Edit Existing Shift
          </ModalHeader>
          <ModalBody>
            <div className="inp-grp">
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
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <TimeDropdown />

                  <img src={require("assets/img/plus-circle.svg")} alt="" />
                </div>
              </div>
              <div className="cardInp">
                <div
                  style={{
                    width: "40%",
                  }}
                  className="flex-start"
                >
                  <h6 className="cardsubtext" style={{ marginBottom: 0 }}>
                    Break Time
                  </h6>
                  <img
                    alt=""
                    style={{ marginLeft: "10%" , cursor: "pointer"}}
                    src={require("assets/img/plus-circle.svg")}
                    onClick={toggleBreaktimeModal}
                  />
                </div>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">End Time</h6>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <TimeDropdown />

                  <img src={require("assets/img/plus-circle.svg")} alt="" />
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
                    Overnight
                  </h6>
                  <div className="flex-start" style={{ width: "inherit" }}>
                    <input type="radio" id="yes" name="overnight" value="yes" />
                    <label className="mb-0 label-radio" for="yes">
                      Yes
                    </label>
                  </div>
                  <div className="flex-start" style={{ width: "inherit" }}>
                    <input type="radio" id="no" name="overnight" value="no" />
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

export default Tab4;
