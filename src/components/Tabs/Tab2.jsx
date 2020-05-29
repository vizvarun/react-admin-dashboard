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
import TableList from "variables/tablelist";

const Tab2 = (props) => {
  const { buttonLabel, className } = props;

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
  const [catExpand, setCatExpand] = useState(false);
  const toggle = () => setModal(!modal);
  const toggleCatExpand = () => setCatExpand(!catExpand);
  const [cycleExpand, setCycleExpand] = useState(false);
  const toggleCycleExpand = () => setCycleExpand(!cycleExpand);
  const [isOpen, setIsOpen] = useState(false);
  const filterToggle = () => setIsOpen(!isOpen);
  const [catModalExpand, setCatModalExpand] = useState(false);
  const toggleCatModalExpand = () => setCatModalExpand(!catModalExpand);
  const [cycleModalExpand, setCycleModalExpand] = useState(false);
  const toggleCycleModalExpand = () => setCycleModalExpand(!cycleModalExpand);
  const expandProductCategory = () => {
    return (
      <>
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
            options={["Option1", "Option2", "Option3", "Option4"]}
          />
          <img
            src={require("assets/img/tick.svg")}
            onClick={toggleCatExpand}
            style={{ cursor: "pointer" }}
          />
        </div>
      </>
    );
  };

  const expandCycleTime = () => {
    return (
      <>
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
            src={require("assets/img/tick.svg")}
            style={{ cursor: "pointer" }}
            onClick={toggleCycleExpand}
          />
        </div>
      </>
    );
  };

  const expandModalProductCategory = () => {
    return (
      <>
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
            options={["Option1", "Option2", "Option3", "Option4"]}
          />
          <img
            src={require("assets/img/tick.svg")}
            onClick={toggleCatModalExpand}
            style={{ cursor: "pointer" }}
          />
        </div>
      </>
    );
  };

  const expandModalCycleTime = () => {
    return (
      <>
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
            src={require("assets/img/tick.svg")}
            style={{ cursor: "pointer" }}
            onClick={toggleCycleModalExpand}
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
                    <DropdownBtn
                      header="User Type"
                      options={["Option1", "Option2", "Option3", "Option4"]}
                    />
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Product Category</h6>
                    <DropdownBtn
                      header="User Type"
                      options={["Option1", "Option2", "Option3", "Option4"]}
                    />
                    <img
                      onClick={toggleCatExpand}
                      src={require("assets/img/plus-circle.svg")}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  {catExpand ? expandProductCategory() : null}
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
                        onClick={toggleCycleExpand}
                        src={require("assets/img/plus-circle.svg")}
                        style={{ cursor: "pointer" }}
                      />
                    </InputGroup>
                  </div>
                  {cycleExpand ? expandCycleTime() : null}
                  <div className="cardInp buttoncon mb">
                    <button className="button">Add Product</button>
                  </div>
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
                        data={[70, 30]}
                        bgColor={["#943563", "#F3A465"]}
                        hoverBgColor={["#943563", "#F3A465"]}
                      />
                    </div>
                  </Col>
                  <Col md="6">
                    <h5 className="cardheadtext">Your overview</h5>
                    <div className="doughnut-graph">
                      <Donut
                        labels={["Inactive", "Active"]}
                        data={[85, 15]}
                        bgColor={["#1F578E", "#ED692C"]}
                        hoverBgColor={["#1F578E", "#ED692C"]}
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
                <DropdownBtn
                  header="User Type"
                  options={["Option1", "Option2", "Option3", "Option4"]}
                />
              </div>
              <div className="cardInp">
                <h6 className="cardsubtext">Product Category</h6>
                <DropdownBtn
                  header="User Type"
                  options={["Option1", "Option2", "Option3", "Option4"]}
                />
                <img
                  onClick={toggleCatModalExpand}
                  src={require("assets/img/plus-circle.svg")}
                  style={{ cursor: "pointer" }}
                />
              </div>
              {catModalExpand ? expandModalProductCategory() : null}
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
                    onClick={toggleCycleModalExpand}
                    src={require("assets/img/plus-circle.svg")}
                    style={{ cursor: "pointer" }}
                  />
                </InputGroup>
              </div>
              {cycleModalExpand ? expandModalCycleTime() : null}
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

export default Tab2;
