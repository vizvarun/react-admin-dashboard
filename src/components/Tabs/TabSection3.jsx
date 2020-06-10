import React, { useState, useEffect } from "react";
import "./tabs.css";
import {
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
  Input,
  ModalFooter,
  Collapse,
} from "reactstrap";
import Donut from "../../variables/doughnut";
import DatePick from "components/DateRange/DatePicker";
import DropdownBtn from "components/DropdownBtn";
import Section3Tab from "./Section3Tab";
import CardCarousel from "../CardCarousel/CardCarousel";
import Section3UpperTab from "./Section3UpperTab";
import TimeDropdown from "../TimePicker/TimePicker";

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

const TabsSection3 = (props) => {
  const { className } = props;
  const [dropdownVal, setDropdownVal] = useState({});
  const updateDropdownVal = (val) => setDropdownVal(val);
  const [modal, setModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setModal(!modal);
  const [modal2, setModal2] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const dateToggle = () => setIsOpenDate(!isOpenDate);
  const toggle2 = () => {
    setModal2(!modal2);
    setModal(false);
  };

  const [inpOne, setInpOne] = useState(0);
  const [inpTwo, setInpTwo] = useState(0);
  const [inpThree, setInpThree] = useState(0);
  const [inpSum, setInpSum] = useState(0);
  const changeInpOne = (event) => setInpOne(event.target.value);

  const changeInpTwo = (event) => setInpTwo(event.target.value);
  const changeInpThree = (event) => setInpThree(event.target.value);

  const changeInpSum = () => {
    let sum = parseInt(inpOne) + parseInt(inpTwo) + parseInt(inpThree);
    return setInpSum(sum);
  };

  useEffect(() => {
    changeInpSum();
  }, [inpOne, inpTwo, inpThree]);

  return (
    <div className="content">
      <div style={{ marginTop: "2%" }}>
        <Row className="top-graph">
          <Col md="2">
            <div className="doughnut-graph">
              <Donut
                legendPosition="left"
                labels={["AR", ""]}
                data={[35, 75]}
                bgColor={["#D50C0C", "#fff"]}
                hoverBgColor={["#D50C0C", "#fff"]}
                legendDisplay="true"
              />
            </div>
          </Col>
          <Col md="2">
            <div className="doughnut-graph">
              <Donut
                legendPosition="left"
                labels={["PR", ""]}
                data={[55, 45]}
                bgColor={["#ED692C", "#fff"]}
                hoverBgColor={["#ED692C", "#fff"]}
                legendDisplay="true"
              />
            </div>
          </Col>
          <Col md="2">
            <div className="doughnut-graph">
              <Donut
                legendPosition="left"
                labels={["QR", ""]}
                data={[15, 85]}
                bgColor={["#E32B2B", "#fff"]}
                hoverBgColor={["#E32B2B", "#fff"]}
                legendDisplay="true"
              />
            </div>
          </Col>
          <Col md="2">
            <div className="doughnut-graph">
              <Donut
                legendPosition="left"
                labels={["OEE", ""]}
                data={[90, 10]}
                bgColor={["#82CA27", "#fff"]}
                hoverBgColor={["#82CA27", "#fff"]}
                legendDisplay="true"
              />
            </div>
          </Col>
        </Row>

        <Card className="cardUser mt- ">
          <CardBody className="ml-2">
            <Row>
              <h6 className="cardmaintext mt-4 mb-4 ml-3 ">
                Production and Downtime Entry
              </h6>
            </Row>
            <Row
              className="mt-2 mb-3"
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Col md="2" className="card-row">
                <h6 className="cardsubtext mr-5 mt-4">Date</h6>
                <div className="">
                  <button
                    type="button"
                    onClick={dateToggle}
                    aria-haspopup="true"
                    aria-expanded="false"
                    class="droptext dropdown-toggle btn btn-secondary btn-date"
                  >
                    Choose
                  </button>
                  <Collapse isOpen={isOpenDate}>
                    <Card className="cardToggle mt-3">
                      <CardBody>
                        <div className="mb-2">To</div> <DatePick />
                        <div className="mt-3">
                          <div className="mb-2">From </div>
                          <DatePick />
                        </div>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </Col>
              <Col md="2" className="card-row">
                <h6 className="cardsubtext mr-5 pb-3 mb-2">Shift</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  getDropdownVal={() => updateDropdownVal()}
                />
              </Col>
              <Col md="2" className="card-row">
                <h6 className="cardsubtext mr-5 pb-3 mb-2">Machine</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  getDropdownVal={() => updateDropdownVal()}
                />
              </Col>
              <Col md="2" className="card-row">
                <h6 className="cardsubtext mr-5 pb-3 mb-2">Operator</h6>
                <DropdownBtn
                  header="User Type"
                  options={dropdownOptions}
                  getDropdownVal={() => updateDropdownVal()}
                />
              </Col>
              <Col md="2" className="card-row">
                <button className="button mt-2" onClick={toggle}>
                  Add Entry
                </button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Modal centered isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} className="modalhead">
            Production Entry
          </ModalHeader>
          <ModalBody>
            <div className="inp-grp">
              <div className="cardInp">
                <h6 className="cardsubtext" style={{ fontWeight: 500 }}>
                  Select Product
                </h6>
                <DropdownBtn
                  getDropdownVal={() => updateDropdownVal()}
                  header="User Type"
                  options={dropdownOptions}
                />
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext" style={{ fontWeight: 500 }}>
                  Total Production
                </h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext" style={{ fontWeight: 500 }}>
                  Rework
                </h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext" style={{ fontWeight: 500 }}>
                  Rejection Reason
                </h6>
              </div>
              <div className="cardInp">
                <div className="cardInp2">
                  <h6 className="cardsubtext mb-3">Asthetic</h6>
                  <InputGroup style={{ border: "1px solid", borderRadius: 10 }}>
                    <Input
                      className="phold"
                      placeholder=""
                      onChange={changeInpOne}
                      value={inpOne}
                    />
                  </InputGroup>
                </div>
                <span style={{ fontSize: "x-large" }}>&#43;</span>
                <div className="cardInp2">
                  <h6 className="cardsubtext">Functional Issue</h6>
                  <InputGroup style={{ border: "1px solid", borderRadius: 10 }}>
                    <Input
                      className="phold"
                      placeholder=""
                      onChange={changeInpTwo}
                      value={inpTwo}
                    />
                  </InputGroup>
                </div>
                <span style={{ fontSize: "x-large" }}>&#43;</span>
                <div className="cardInp2">
                  <h6 className="cardsubtext">Low efficiency</h6>
                  <InputGroup style={{ border: "1px solid", borderRadius: 10 }}>
                    <Input
                      className="phold"
                      placeholder=""
                      onChange={changeInpThree}
                      value={inpThree}
                    />
                  </InputGroup>
                </div>
                <span style={{ fontSize: "x-large" }}>&#61;</span>
                <div className="cardInp2">
                  <h6 className="cardsubtext">Total Rejection</h6>
                  <InputGroup style={{ border: "1px solid", borderRadius: 10 }}>
                    <Input
                      className="phold"
                      placeholder=""
                      value={inpSum}
                      disabled
                    />
                  </InputGroup>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="buttonModal1" onClick={toggle}>
              Save and Exit
            </button>
            <button className="buttonModal2" onClick={toggle2}>
              Save and Add more
            </button>
          </ModalFooter>
        </Modal>
        <Modal centered isOpen={modal2} toggle={toggle2} className={className}>
          <ModalHeader toggle={toggle2} className="modalhead">
            Downtime Entry
          </ModalHeader>
          <ModalBody>
            <div className="inp-grp">
              <div className="cardInp">
                <h6 className="cardsubtext" style={{ fontWeight: 500 }}>
                  Stoppage Reason
                </h6>
                <DropdownBtn
                  getDropdownVal={() => updateDropdownVal()}
                  header="User Type"
                  options={dropdownOptions}
                />
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext" style={{ fontWeight: 500 }}>
                  Sub Stoppage Reason
                </h6>
                <DropdownBtn
                  getDropdownVal={() => updateDropdownVal()}
                  header="User Type"
                  options={dropdownOptions}
                />
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext" style={{ fontWeight: 500 }}>
                  Start Time
                </h6>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <TimeDropdown />
                </div>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext mt-2" style={{ fontWeight: 500 }}>
                  End Time
                </h6>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <TimeDropdown />
                </div>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext" style={{ fontWeight: 500 }}>
                  Total Stoppage Reason
                </h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext" style={{ fontWeight: 500 }}>
                  Remark
                </h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="buttonModal1" onClick={toggle2}>
              Save and Exit
            </button>
          </ModalFooter>
        </Modal>
        <div className="mb-4 " style={{ float: "right" }}>
          <button className="button mt-2">Import Excel</button>
          <div className="mt-2 icon-toggle">
            <img
              alt=""
              src={require("assets/img/filter1.svg")}
              className="filtericon3"
            />
            <img
              alt=""
              src={require("assets/img/filter2.svg")}
              className="filtericon3"
            />
          </div>
        </div>

        <div>
          <Section3Tab />
        </div>
      </div>
    </div>
  );
};

export default TabsSection3;
