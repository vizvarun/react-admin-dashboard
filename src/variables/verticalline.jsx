import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./bar.css";

class VerticleLine extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <BarChart
          width={this.props.width}
          height={this.props.height}
          data={this.props.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Start" stackId="a" fill="#8884d8" />
          <Bar dataKey="Break" stackId="a" fill="#82ca9d" />
          <Bar dataKey="End" stackId="a" fill="#ff1999" />
        </BarChart>
      </>
    );
  }
}

export default VerticleLine;
