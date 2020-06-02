import React, { Component } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ProductionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedColor: "black",
      uncheckedColor: "black",
    };
  }

  onCheckedHandler = () => {
    this.setState((prevState) => {
      if (prevState.checkedColor === "black") {
        return (prevState.checkedColor = "#28a745");
      } else {
        return (prevState.checkedColor = "black");
      }
    });
  };

  onRejectHandler = () => {
    this.setState((prevState) => {
      if (prevState.uncheckedColor === "black") {
        return (prevState.uncheckedColor = "#dc3545");
      } else {
        return (prevState.uncheckedColor = "black");
      }
    });
  };

  render() {
    const { tableHead, tableData } = this.props;
    return (
      <>
        <Table responsive>
          <thead>
            <tr>
              {tableHead.map((thead) => (
                <th key={tableHead.indexOf(thead)} className="tablehead">
                  {thead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr>
                {item.map((i) => (
                  <td key={item.indexOf(i)}>{i}</td>
                ))}

                {tableHead[tableHead.length - 2] === "Edit" ? (
                  <td key={tableData.indexOf(item)}>
                    <img
                      alt=""
                      className="pointer-cursor"
                      onClick={this.props.toggle}
                      src={require("../assets/img/edit-square.svg")}
                    />
                  </td>
                ) : null}
                {tableHead[tableHead.length - 1] === "Approve" ? (
                  <td key={tableData.indexOf(item)}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={["far", "check-circle"]}
                        size="lg"
                        color={this.state.checkedColor}
                        onClick={this.onCheckedHandler}
                      />
                      <FontAwesomeIcon
                        icon={["far", "times-circle"]}
                        size="lg"
                        color={this.state.uncheckedColor}
                        onClick={this.onRejectHandler}
                      />
                    </div>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default ProductionTable;
