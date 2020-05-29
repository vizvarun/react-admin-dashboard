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
    name: "Astetics",
    Comapy: 4000,
    Yours: 2400,
    amt: 2400,
  },
  {
    name: "Astetics",
    Comapy: 3000,
    Yours: 1398,
    amt: 2210,
  },
  {
    name: "Astetics",
    Comapy: 2000,
    Yours: 9800,
    amt: 2290,
  },
  {
    name: "Astetics",
    Comapy: 2780,
    Yours: 3908,
    amt: 2000,
  },
  {
    name: "Astetics",
    Comapy: 1890,
    Yours: 4800,
    amt: 2181,
  },
  {
    name: "Astetics",
    Comapy: 2390,
    Yours: 3800,
    amt: 2500,
  },
  {
    name: "Astetics ",
    Comapy: 3490,
    Yours: 4300,
    amt: 2100,
  },
];

export default class Bars extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    return (
      <>
        <div className="table-responsive">
          <table>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Comapy" fill="#ED692C" />
              <Bar dataKey="Yours" fill="#1E558A" />
            </BarChart>
          </table>
        </div>
      </>
    );
  }
}
