import React, { PureComponent } from "react";
import { Bubble } from "react-chartjs-2";

class BubbleChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Bubble
          data={this.props.data}
          width={this.props.width}
          height={this.props.height}
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

export default BubbleChart;
