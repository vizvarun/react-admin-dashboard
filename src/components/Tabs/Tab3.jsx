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
  Label,
  Collapse,
  FormGroup,
} from "reactstrap";
import "./tabs.css";
import DropdownBtn from "components/DropdownBtn";
import Donut from "../../variables/doughnut";
import TableList from "variables/tablelist";

const Tab3 = (props) => {
  const { buttonLabel, className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const filterToggle = () => setIsOpen(!isOpen);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const data = {
    tableHeading: [
      "Machine",
      "Location",
      "Machine Code",
      "Category Name",
      "Status",
      "Edit",
    ],
    tableData: [
      ["ABC345", "Noida", "ABC345", "Newcode", true],
      ["XYZ123", "Noida", "XYZ123", "Newcode", false],
    ],
  };

  const [catExpand, setCatExpand] = useState(false);
  const toggleCatExpand = () => setCatExpand(!catExpand);

  const expandCategoryName = () => {
    return (
      <>
        <div className="cardInp">
          <h6 className="cardsubtext2">New Category</h6>
          <InputGroup className="no-border">
            <Input className="phold" placeholder="Type Here" />
          </InputGroup>
          <img
            onClick={toggleCatExpand}
            style={{ cursor: "pointer" }}
            src={require("assets/img/tick.svg")}
          />
        </div>
      </>
    );
  };

  const [catModalExpand, setCatModalExpand] = useState(false);
  const toggleCatModalExpand = () => setCatModalExpand(!catModalExpand);

  const expandCategoryModalName = () => {
    return (
      <>
        <div className="cardInp">
          <h6 className="cardsubtext2">New Category</h6>
          <InputGroup className="no-border">
            <Input className="phold" placeholder="Type Here" />
          </InputGroup>
          <img
            onClick={toggleCatModalExpand}
            style={{ cursor: "pointer" }}
            src={require("assets/img/tick.svg")}
          />
        </div>
      </>
    );
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
                        Location
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
                    <h5 className="cardheadtext">Add new Machine</h5>
                  </CardText>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Machine</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                    </InputGroup>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Location</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                    </InputGroup>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Category Name</h6>
                    <DropdownBtn />
                    <img
                      onClick={toggleCatExpand}
                      style={{ cursor: "pointer" }}
                      src={require("assets/img/plus-circle.svg")}
                    />
                  </div>
                  {catExpand ? expandCategoryName() : null}

                  <div className="cardInp">
                    <h6 className="cardsubtext">Machine Code</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                    </InputGroup>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Supervisor Name</h6>
                    <img src={require("assets/img/plus-circle.svg")} />
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Product Associated</h6>
                    <img src={require("assets/img/plus-circle.svg")} />
                  </div>
                </div>
                <div className="cardInp buttoncon mb">
                  <button className="button">Add Machine</button>
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
                        labels={["Inactive", "Active"]}
                        data={[65, 35]}
                        bgColor={["#4B6172", "#B7EB98"]}
                        hoverBgColor={["#4B6172", "#F3A465"]}
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <h5 className="cardheadtext">Your overview</h5>
                    <div className="doughnut-graph">
                      <Donut
                        labels={["Inactive", "Active"]}
                        data={[85, 15]}
                        bgColor={["#F2B1C8", "#414151"]}
                        hoverBgColor={["#F2B1C8", "#414151"]}
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
            Edit Existing Machine
          </ModalHeader>
          <ModalBody>
            <div className="inp-grp">
              <div className="cardInp">
                <h6 className="cardsubtext">Machine</h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Location</h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Category Name</h6>
                <DropdownBtn />
                <img
                  onClick={toggleCatModalExpand}
                  style={{ cursor: "pointer" }}
                  src={require("assets/img/plus-circle.svg")}
                />
              </div>
              {catModalExpand ? expandCategoryModalName() : null}

              <div className="cardInp">
                <h6 className="cardsubtext">Machine Code</h6>
                <InputGroup className="no-border">
                  <Input className="phold" placeholder="Type Here" />
                </InputGroup>
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Supervisor Name</h6>
                <img src={require("assets/img/plus-circle.svg")} />
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Product Associated</h6>
                <img src={require("assets/img/plus-circle.svg")} />
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

export default Tab3;
