import React, { PureComponent } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Line
          data={this.props.data}
          options={{
            maintainAspectRatio: true,
            legend: {
              display: true,
              position: "bottom",
              maintainAspectRatio: true,
            },
          }}
        />
      </>
    );
  }
}

export default LineChart;
