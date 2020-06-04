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

const data = [
  {
    name: "A Shift",
    Break: 40,
    Start: 24,
    End: 26,
    amt: 24,
  },
  {
    name: "B Shift",
    Break: 30,
    Start: 13,
    End: 32,
    amt: 22,
  },
  {
    name: "C Shift",
    Break: 20,
    End: 27,
    Start: 98,
    amt: 22,
  },
  {
    name: "D Shift",
    Break: 27,
    End: 36,
    Start: 39,
    amt: 20,
  },
  {
    name: "E Shift",
    Break: 18,
    End: 30,
    Start: 48,
    amt: 21,
  },
  {
    name: "F Shift",
    Break: 23,
    End: 22,
    Start: 38,
    amt: 25,
  },
  {
    name: "G Shift",
    Break: 34,
    Start: 43,
    End: 35,
    amt: 21,
  },
];

export default class VerticalLine extends PureComponent {
  render() {
    return (
      <>
        <BarChart
          width={this.props.width}
          height={this.props.height}
          data={data}
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
