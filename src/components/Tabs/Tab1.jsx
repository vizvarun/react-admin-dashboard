import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import { Card, CardBody, CardText, Row, Col } from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.jsx";

import "./tabs.css";

class Tab1 extends React.Component {
  render() {
    return (
      <>
        <div className="content tabcon">
          <Row>
            <Col md="8"></Col>
            <Col md="4">
              <Card>
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tab1;
