import React, { Component } from "react";
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
  Label,
  Collapse,
  FormGroup,
} from "reactstrap";

import DropdownBtn from "components/DropdownBtn";

const dropdownOptions = [
  { id: 1, value: "Product1", label: "Product 1" },
  { id: 2, value: "Product2", label: "Product 2" },
  { id: 3, value: "Product3", label: "Product 3" },
  { id: 4, value: "Product4", label: "Product 4" },
];

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supervisors: [],
      temp: {},
    };
  }

  addSuperVisorHandler = () => {
    const arr = this.state.supervisors;
    arr.push({ id: 4, value: "Product4", label: "Product 4" });
    this.setState({
      supervisor: arr,
    });
  };

  updateDropdownVal = (val) => {
    console.log(val);
    this.setState({
      temp: val,
    });
  };

  removeSupervisorHandler = (supervisor) => {
    const filterSupervisor = this.state.supervisors.filter(
      (m) => m.id !== supervisor.id
    );
    this.setState({ supervisors: filterSupervisor });
  };

  render() {
    return (
      <Modal
        centered
        isOpen={this.props.modal}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle} className="modalhead">
          Add Product
        </ModalHeader>
        <ModalBody>
          <div className="inp-grp">
            <div className="cardInp">
              <h6 className="cardsubtext">Product</h6>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <DropdownBtn
                  header="Product"
                  options={dropdownOptions}
                  getDropdownVal={this.updateDropdownVal.bind(this)}
                />
                <img
                  onClick={this.addSuperVisorHandler}
                  alt=""
                  style={{ cursor: "pointer" }}
                  src={require("assets/img/plus-circle.svg")}
                />
              </div>
            </div>
            {this.state.supervisors.map((supervisor) => (
              <div className="cardInp">
                <div
                  style={{
                    width: "100%",
                  }}
                  className="flex-end"
                >
                  <h6 className="cardsubtext" style={{ marginBottom: 0 }}>
                    {supervisor.label}
                  </h6>
                  <img
                    onClick={() => this.removeSupervisorHandler(supervisor)}
                    alt=""
                    style={{ marginLeft: "10%", cursor: "pointer" }}
                    src={require("assets/img/minus-circle.svg")}
                  />
                </div>
              </div>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="cardInp buttoncon mb">
            <button className="button" onClick={this.props.toggle}>
              Save
            </button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ProductModal;
