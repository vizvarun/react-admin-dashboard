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

class Bars extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="table-responsive">
          <table>
            <BarChart
              width={500}
              height={300}
              data={this.props.data}
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

export default Bars;
