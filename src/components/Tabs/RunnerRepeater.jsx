import React, { useState } from "react";
import "../Tabs/tabs.css";
import { Row, Col, Card, CardBody, CardText } from "reactstrap";
import TableList from "variables/tablelist";
import { Bar } from "react-chartjs-2";
import BubbleChart from "../../variables/BubbleChart";
const data = {
  labels: ["January"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{ x: 10, y: 20, r: 5 }],
    },
  ],
};

const RunnerRepeater = () => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const data = {
    tableHeading: ["Volume", "Repeater", "Stranger"],
    tableData: [
      ["100", "4", "4"],
      ["200", "7", "7"],
      ["300", "2", "2"],
    ],
  };
  return (
    <>
      <Row style={{ marginTop: "-2%" }}>
        <Col>
          <Card style={{ boxShadow: "none" }}>
            <CardBody>
              <div className="inp-grp">
                <CardText>
                  <h5 className="cardheadtext" style={{ fontWeight: "500" }}>
                    Runner Repeater and Stranger Analysis
                  </h5>
                </CardText>
                <div className="">
                  <Row>
                    <Col md="8">
                      <Card className="cardUser">
                        <CardBody>
                          <div className="pt-5 pb-5">
                            <BubbleChart data={data} />
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="4">
                      <Row>
                        <Col>
                          <img
                            alt=""
                            src={require("assets/img/filter1.svg")}
                            style={{ float: "right", marginBottom: "2%" }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Card className="cardUser p-3">
                            <TableList
                              toggle={toggle}
                              tableHead={data.tableHeading}
                              tableData={data.tableData}
                            />
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RunnerRepeater;
