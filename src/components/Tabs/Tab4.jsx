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
  Collapse,
  FormGroup,
  Label,
} from "reactstrap";
import "./tabs.css";
import DropdownBtn from "components/DropdownBtn";
import Donut from "../../variables/doughnut";
import VerticalLine from "variables/verticalline";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import TableList from "variables/tablelist";

const Tab4 = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const filterToggle = () => setIsOpen(!isOpen);

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
                src={require("assets/img/filter1.svg")}
                className="filtericon"
              />
              <img
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
                    <DropdownBtn header="User Type" options={dropdownOptions} />
                    <DropdownBtn header="User Type" options={dropdownOptions} />
                    <img src={require("assets/img/plus-circle.svg")} />
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
                        style={{ marginLeft: "10%" }}
                        src={require("assets/img/plus-circle.svg")}
                      />
                    </div>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">End Time</h6>
                    <DropdownBtn header="User Type" options={dropdownOptions} />
                    <DropdownBtn header="User Type" options={dropdownOptions} />
                    <img src={require("assets/img/plus-circle.svg")} />
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
                  src={require("assets/img/filter2.svg")}
                  className="filtericon2"
                />
              </div>
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
        <Modal centered isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} className="modalhead">
            Edit Existing Product
          </ModalHeader>
          <ModalBody>
            <div className="inp-grp">
              <div className="cardInp">
                <h6 className="cardsubtext">User Type</h6>
                <DropdownBtn header="User Type" options={dropdownOptions} />
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
