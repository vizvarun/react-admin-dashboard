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
import TableList from "variables/tablelist";

const Tab5 = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

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
                src={require("assets/img/filter1.svg")}
                className="filtericon"
              />
              <img
                src={require("assets/img/filter2.svg")}
                className="filtericon"
              />
            </div>
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
                    <h6 className="cardsubtext">Scheduled Loss</h6>
                    <input type="radio" id="yes" name="loss" value="yes" />
                    <label for="yes">Yes</label>
                    <input type="radio" id="no" name="loss" value="no" />
                    <label for="no">No</label>
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
                  src={require("assets/img/filter2.svg")}
                  className="filtericon2"
                />
              </div>
              <div className="internalrow">
                <Row>
                  <Col md="6">
                    <h5 className="cardheadtext">Production House</h5>
                    <div className="doughnut-graph">
                      <Donut
                        labels={["Scheduled", "UnScheduled"]}
                        data={[70, 30]}
                        bgColor={["#336481", "#7ABEBA"]}
                        hoverBgColor={["#336481", "#7ABEBA"]}
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <h5 className="cardheadtext">Your overview</h5>
                    <div className="doughnut-graph">
                      <Donut
                        labels={["Scheduled", "UnScheduled"]}
                        data={[85, 15]}
                        bgColor={["#8D5CF6", "#FAD84A"]}
                        hoverBgColor={["#8D5CF6", "#FAD84A"]}
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
                <h6 className="cardsubtext">Scheduled Loss</h6>
                <input type="radio" id="yes" name="loss" value="yes" />
                <label for="yes">Yes</label>
                <input type="radio" id="no" name="loss" value="no" />
                <label for="no">No</label>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Status</h6>
                <input type="radio" id="yes" name="status" value="yes" />
                <label for="yes">Yes</label>
                <input type="radio" id="no" name="status" value="no" />
                <label for="no">No</label>
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
