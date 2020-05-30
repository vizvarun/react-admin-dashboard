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
    Break: 4000,
    Start: 2400,
    End: 2600,
    amt: 2400,
  },
  {
    name: "B Shift",
    Break: 3000,
    Start: 1398,
    End: 3200,
    amt: 2210,
  },
  {
    name: "C Shift",
    Break: 2000,
    End: 2700,
    Start: 9800,
    amt: 2290,
  },
  {
    name: "D Shift",
    Break: 2780,
    End: 3600,
    Start: 3908,
    amt: 2000,
  },
  {
    name: "E Shift",
    Break: 1890,
    End: 3000,
    Start: 4800,
    amt: 2181,
  },
  {
    name: "F Shift",
    Break: 2390,
    End: 2200,
    Start: 3800,
    amt: 2500,
  },
  {
    name: "G Shift",
    Break: 3490,
    Start: 4300,
    End: 3500,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <>
        <BarChart
          width={550}
          height={300}
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
