import React, { useState } from "react";
import "../Tabs/tabs.css";
import { Row, Col, Card, CardBody, CardText } from "reactstrap";
import TableList from "variables/tablelist";
import { Bar } from "react-chartjs-2";
import VerticalLine from "variables/verticalline";

const ReasonDuration = () => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const data = {
    tableHeading: ["Reason", "Sub Reason", "Schedule Loss", "Frequency"],
    tableData: [
      ["R1", "SB1", "20", "4"],
      ["R2", "SB2", "20", "7"],
      ["R3", "SB3", "20", "2"],
    ],
  };

  const verticleData = [
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
  return (
    <>
      <Row>
        <Col>
          <Card style={{ boxShadow: "none" }}>
            <CardBody>
              <div className="inp-grp">
                <CardText>
                  <h5 className="cardheadtext" style={{ fontWeight: "500" }}>
                    Reason vs Duration Report
                  </h5>
                </CardText>
                <div className="">
                  <Row>
                    <Col md="8">
                      <Card className="cardUser">
                        <CardBody>
                          <div className="pt-5 pb-5">
                            <div className="table-responsive">
                              <table>
                                <thead>
                                  <VerticalLine
                                    width={1100}
                                    height={500}
                                    data={verticleData}
                                  />
                                </thead>
                              </table>
                            </div>
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

export default ReasonDuration;
