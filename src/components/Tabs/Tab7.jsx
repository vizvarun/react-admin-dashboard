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
import TableList from "variables/tablelist";
import BarChart from "variables/Bar";
import DateRange from "components/DateRange/DateRange";
const data = [
  {
    name: "Astetics",
    Comapy: 4000,
    Yours: 2400,
    amt: 2400,
  },
  {
    name: "Astetics",
    Comapy: 3000,
    Yours: 1398,
    amt: 2210,
  },
  {
    name: "Astetics",
    Comapy: 2000,
    Yours: 9800,
    amt: 2290,
  },
  {
    name: "Astetics",
    Comapy: 2780,
    Yours: 3908,
    amt: 2000,
  },
  {
    name: "Astetics",
    Comapy: 1890,
    Yours: 4800,
    amt: 2181,
  },
  {
    name: "Astetics",
    Comapy: 2390,
    Yours: 3800,
    amt: 2500,
  },
  {
    name: "Astetics ",
    Comapy: 3490,
    Yours: 4300,
    amt: 2100,
  },
];
const Tab7 = (props) => {
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
      "Product Category",
      "Reason Description",
      "Status",
      "Edit",
    ],
    tableData: [
      ["AFR456", "Asthetics", "Category 1", "Lorem Ipsum Dolor Sit", true],
      ["AFR456", "Asthetics", "Category 1", "Lorem Ipsum Dolor Sit", false],
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
                        New to Old
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check className="toggle-label">
                        <Input type="radio" name="radio1" />
                        Old to New
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
                    <h5 className="cardheadtext">Add new Rejection Reason</h5>
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
                    <h6 className="cardsubtext">Reason Description</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                    </InputGroup>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Product Category</h6>
                    <DropdownBtn header="User Type" options={dropdownOptions} />
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
                          <BarChart data={data} />
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
            Edit Existing Reason
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
                <h6 className="cardsubtext">Reason Description</h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Product Category</h6>
                <DropdownBtn header="User Type" options={dropdownOptions} />
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

export default Tab7;
