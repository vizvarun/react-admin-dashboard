import React, { Component } from "react";

import { Doughnut } from "react-chartjs-2";

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const chartData = {
      labels: this.props.labels,
      datasets: [
        {
          data: this.props.data,
          backgroundColor: this.props.bgColor,
          hoverBackgroundColor: this.props.hoverBgColor,
        },
      ],
    };

    return (
      <>
        <Table responsive>
          <thead>
            <tr>
              <th className="tablehead">User Name</th>
              <th className="tablehead">Phone Number</th>
              <th className="tablehead">Type</th>
              <th className="tablehead">Contractor Name</th>
              <th className="tablehead">Status</th>
              <th className="tablehead">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Manish Jain</td>
              <td>8889997770</td>
              <td>Payroll</td>
              <td>N/A</td>
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
              <td>Manish Jain</td>
              <td>8889997770</td>
              <td>Payroll</td>
              <td>N/A</td>
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
      </>
    );
  }
}

export default TableList;
