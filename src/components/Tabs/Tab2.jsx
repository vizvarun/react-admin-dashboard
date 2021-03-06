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
import Donut from "../../variables/doughnut";
import TableList from "variables/tablelist";
import DateRange from "components/DateRange/DateRange";

const Tab2 = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const data = {
    tableHeading: [
      "Product Code",
      "Product Name",
      "Product Type",
      "Category Name",
      "Category Name",
      "Unit",
      "Status",
      "Edit",
    ],
    tableData: [
      ["ABC345", "Valvet", "None", "Newcode", 400.0, "m/hr", true],
      ["XYZ123", "Valvet", "None", "Newcode", 400.0, "m/hr", false],
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

  const [isOpen, setIsOpen] = useState(false);
  const filterToggle = () => setIsOpen(!isOpen);

  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const productToggle = () => setIsOpenProduct(!isOpenProduct);

  const [isOpenCycle, setIsOpenCycle] = useState(false);
  const cycleToggle = () => setIsOpenCycle(!isOpenCycle);

  const [isOpenModalProduct, setIsOpenModalProduct] = useState(false);
  const productModalToggle = () => setIsOpenModalProduct(!isOpenModalProduct);

  const [isOpenModalCycle, setIsOpenModalCycle] = useState(false);
  const cycleModalToggle = () => setIsOpenModalCycle(!isOpenModalCycle);

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const calendarToggle = () => setIsOpenCalendar(!isOpenCalendar);

  const toggle = () => setModal(!modal);

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
                        Product Type
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
                    <h5 className="cardheadtext">Add new Product</h5>
                  </CardText>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Product Type</h6>
                    <div className="mr-4">
                      <DropdownBtn
                        header="User Type"
                        options={dropdownOptions}
                      />
                    </div>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Product Category</h6>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <DropdownBtn
                        header="User Type"
                        options={dropdownOptions}
                      />
                      <img
                        alt=""
                        onClick={productToggle}
                        src={require("assets/img/plus-circle.svg")}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <Collapse isOpen={isOpenProduct}>
                    <div className="cardInp">
                      <h6 className="cardsubtext2">New Category</h6>
                      <InputGroup className="no-border">
                        <Input className="phold" placeholder="Type Here" />
                      </InputGroup>
                    </div>
                    <div className="cardInp">
                      <h6 className="cardsubtext2">Unit</h6>
                      <DropdownBtn
                        header="User Type"
                        options={dropdownOptions}
                      />
                      <img
                        alt=""
                        src={require("assets/img/tick.svg")}
                        onClick={productToggle}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </Collapse>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Product Code</h6>
                    <div className="mr-4">
                      <InputGroup className="no-border">
                        <Input className="phold" placeholder="Type Here" />
                      </InputGroup>
                    </div>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Product Name</h6>
                    <div className="mr-4">
                      <InputGroup className="no-border">
                        <Input className="phold" placeholder="Type Here" />
                      </InputGroup>
                    </div>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Cycle Time</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                      <img
                        alt=""
                        onClick={cycleToggle}
                        src={require("assets/img/plus-circle.svg")}
                        style={{ cursor: "pointer" }}
                      />
                    </InputGroup>
                  </div>
                  <Collapse isOpen={isOpenCycle}>
                    <div className="cardInp">
                      <div className="cardInp2">
                        <h6 className="cardsubtext">No. of Cavities</h6>
                        <InputGroup className="no-border">
                          <Input className="phold" placeholder="" />
                        </InputGroup>
                      </div>
                      <div className="cardInp2">
                        <h6 className="cardsubtext">Wt. of single Pr.</h6>
                        <InputGroup className="no-border">
                          <Input className="phold" placeholder="" />
                        </InputGroup>
                      </div>
                      <div className="cardInp2">
                        <h6 className="cardsubtext">Shot Time</h6>
                        <InputGroup className="no-border">
                          <Input className="phold" placeholder="" />
                        </InputGroup>
                      </div>
                      <img
                        alt=""
                        src={require("assets/img/tick.svg")}
                        style={{ cursor: "pointer" }}
                        onClick={cycleToggle}
                      />
                    </div>
                  </Collapse>
                </div>
                <div className="cardInp buttoncon mb">
                  <button className="button">Add Product</button>
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
                        labels={["Inactive", "Active"]}
                        data={[70, 30]}
                        bgColor={["#943563", "#F3A465"]}
                        hoverBgColor={["#943563", "#F3A465"]}
                        legendDisplay="true"
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <h5 className="cardheadtext">Your overview</h5>
                    <div className="doughnut-graph">
                      <Donut
                        legendPosition="bottom"
                        labels={["Inactive", "Active"]}
                        data={[85, 15]}
                        bgColor={["#1F578E", "#ED692C"]}
                        hoverBgColor={["#1F578E", "#ED692C"]}
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
            Edit Existing Product
          </ModalHeader>
          <ModalBody>
            <div className="inp-grp">
              <div className="cardInp">
                <h6 className="cardsubtext">Product Type</h6>
                <DropdownBtn header="User Type" options={dropdownOptions} />
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Product Category</h6>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <DropdownBtn header="User Type" options={dropdownOptions} />
                  <img
                    alt=""
                    onClick={productModalToggle}
                    src={require("assets/img/plus-circle.svg")}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <Collapse isOpen={isOpenModalProduct}>
                <div className="cardInp">
                  <h6 className="cardsubtext2">New Category</h6>
                  <InputGroup className="no-border">
                    <Input className="phold" placeholder="Type Here" />
                  </InputGroup>
                </div>
                <div className="cardInp">
                  <h6 className="cardsubtext2">Unit</h6>
                  <DropdownBtn header="User Type" options={dropdownOptions} />
                  <img
                    alt=""
                    src={require("assets/img/tick.svg")}
                    onClick={productModalToggle}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Collapse>
              <div className="cardInp">
                <h6 className="cardsubtext">Product Code</h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Product Name</h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Cycle Time</h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                  <img
                    alt=""
                    onClick={cycleModalToggle}
                    src={require("assets/img/plus-circle.svg")}
                    style={{ cursor: "pointer" }}
                  />
                </InputGroup>
              </div>
              <Collapse isOpen={isOpenModalCycle}>
                <div className="cardInp">
                  <div className="cardInp2">
                    <h6 className="cardsubtext">No. of Cavities</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="" />
                    </InputGroup>
                  </div>
                  <div className="cardInp2">
                    <h6 className="cardsubtext">Wt. of single Pr.</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="" />
                    </InputGroup>
                  </div>
                  <div className="cardInp2">
                    <h6 className="cardsubtext">Shot Time</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="" />
                    </InputGroup>
                  </div>
                  <img
                    alt=""
                    src={require("assets/img/tick.svg")}
                    style={{ cursor: "pointer" }}
                    onClick={cycleModalToggle}
                  />
                </div>
              </Collapse>
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

export default Tab2;
