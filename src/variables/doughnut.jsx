import React, { Component } from "react";

import { Doughnut } from "react-chartjs-2";

class Donut extends Component {
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
        <Doughnut
          data={chartData}
          width={1}
          height={1}
          options={{
            maintainAspectRatio: true,
            legend: {
              position: "bottom",
              maintainAspectRatio: true,
            },
          }}
        />
      </>
    );
  }
}

export default Donut;
