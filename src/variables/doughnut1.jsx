import React, { Component } from "react";

import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Inactive", "Active"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#943563", "#F3A465"],
      hoverBackgroundColor: ["#943563", "#F3A465"],
    },
  ],
};

class Donut1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Doughnut
          data={data}
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

export default Donut1;
