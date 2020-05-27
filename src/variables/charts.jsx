import React, { Component } from "react";

import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Contractor", "Payroll"],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ["#CD0F5F", "#82CA27"],
      hoverBackgroundColor: ["#CD0F5F", "#82CA27"],
    },
  ],
};

class Donut extends Component {
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
			  maintainAspectRatio: true
            },
          }}
        />
      </>
    );
  }
}

export default Donut;
