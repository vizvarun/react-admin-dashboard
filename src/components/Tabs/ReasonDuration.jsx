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
                                  <VerticalLine width={1200} height={500} />
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
