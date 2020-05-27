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
import Donut from "../../variables/charts";
import Donut1 from "../../variables/doughnut1";

const Tab2 = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
            <Table responsive>
              <thead>
                <tr>
                  <th className="tablehead">Product Code</th>
                  <th className="tablehead">Product Number</th>
                  <th className="tablehead">Product Type</th>
                  <th className="tablehead">Category Name</th>
                  <th className="tablehead">Cycle Time</th>
                  <th className="tablehead">Unit</th>
                  <th className="tablehead">Status</th>
                  <th className="tablehead">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ABC345</td>
                  <td>Valvet</td>
                  <td>None</td>
                  <td>Newcode</td>
                  <td>400.00</td>
                  <td>m/hr</td>
                  <td>
                    <img src={require("../../assets/img/reddot.svg")} />
                  </td>
                  <td>
                    <img
                      className="pointer-cursor"
                      onClick={toggle}
                      src={require("../../assets/img/edit-square.svg")}
                    />
                  </td>
                </tr>
                <tr>
                  <td>ABC345</td>
                  <td>Valvet</td>
                  <td>None</td>
                  <td>Newcode</td>
                  <td>400.00</td>
                  <td>m/hr</td>
                  <td>
                    <img src={require("../../assets/img/greendot.svg")} />
                  </td>
                  <td>
                    <img
                      className="pointer-cursor"
                      onClick={toggle}
                      src={require("../../assets/img/edit-square.svg")}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
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
                    <DropdownBtn />
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext">Product Category</h6>
                    <DropdownBtn />
                    <img src={require("assets/img/plus-circle.svg")} />
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext2">New Category</h6>
                    <InputGroup className="no-border">
                      <Input className="phold" placeholder="Type Here" />
                    </InputGroup>
                  </div>
                  <div className="cardInp">
                    <h6 className="cardsubtext2">Unit</h6>
                    <DropdownBtn />
                    <img src={require("assets/img/tick.svg")} />
                  </div>
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
                      <img src={require("assets/img/plus-circle.svg")} />
                    </InputGroup>
                  </div>
                </div>
                <div className="cardInp buttoncon mb">
                  <button className="button">Add Product</button>
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
                      <Donut1 />
                    </div>
                  </Col>
                  <Col md="6">
                    <h5 className="cardheadtext">Your overview</h5>
                    <div className="doughnut-graph">
                      <Donut1 />
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
                <DropdownBtn />
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

export default Tab2;
