import React, { useState, useEffect } from "react";
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
import TableList from "../../variables/tablelist";
import Spinner from "components/Spinner/spinner";

const Tab1 = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const filterToggle = () => setIsOpen(!isOpen);

  const toggle = () => setModal(!modal);
  const data = {
    tableHeading: [
      "User Name",
      "Phone Number",
      "Type",
      "Contractor Name",
      "Status",
      "Edit",
    ],
    tableData: [
      ["Manish Jain", 8889997770, "Payroll", "Mahesh Lal", true],
      ["Mikesh Jain", 8211297770, "Payroll", "Mukesh Lal", false],
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
                        Active
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check className="toggle-label">
                        <Input type="radio" name="radio1" />
                        Inactive
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
                    <h5 className="cardheadtext">Create New User</h5>
                  </CardText>
                  <div className="cardInp">
                    <h6 className="cardsubtext">User Type</h6>
                    <DropdownBtn
                      header="User Type"
                      options={dropdownOptions}
                      size=""
                    />
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
                    <Donut
                      labels={["Contractor", "Payroll"]}
                      data={[60, 40]}
                      bgColor={["#CD0F5F", "#82CA27"]}
                      hoverBgColor={["#CD0F5F", "#82CA27"]}
                    />
                  </Col>
                  <Col md="6">
                    <h5 className="cardheadtext">Your overview</h5>
                    <div className="doughnut-graph">
                      <Donut
                        labels={["Contractor", "Payroll"]}
                        data={[70, 30]}
                        bgColor={["#2B47E3", "#E32B2B"]}
                        hoverBgColor={["#2B47E3", "#E32B2B"]}
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
            Edit Existing User
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
                <input type="radio" id="active" name="status" value="active" />
                <label for="active">Active</label>
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="inactive"
                />
                <label for="inactive">InActive</label>
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

export default Tab1;
