import React, { Component } from "react";
import { Table } from "reactstrap";

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
                {item.map((i) =>
                  typeof i !== typeof true ? (
                    <td key={item.indexOf(i)}>{i}</td>
                  ) : (
                    <td key={item.indexOf(i)}>
                      <img
                        src={
                          i
                            ? require("../assets/img/greendot.svg")
                            : require("../assets/img/reddot.svg")
                        }
                      />
                    </td>
                  )
                )}

                {tableHead[tableHead.length - 1] === "Edit" ? (
                  <td key={tableData.indexOf(item)}>
                    <img
                      className="pointer-cursor"
                      onClick={this.props.toggle}
                      src={require("../assets/img/edit-square.svg")}
                    />
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

export default TableList;
