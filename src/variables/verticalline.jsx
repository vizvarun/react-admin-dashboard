import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "22:00",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "20:00",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "18:00",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "16:00",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "14:00",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "//jsfiddle.net/alidingling/6okmehja/";

  render() {
    return (
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            layout="vertical"
            width={500}
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
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Line dataKey="pv" stroke="#8884d8" />
            <Line dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
