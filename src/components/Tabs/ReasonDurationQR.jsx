import React, { useState } from "react";
import "../Tabs/tabs.css";
import { Row, Col, Card, CardBody, CardText } from "reactstrap";
import TableList from "variables/tablelist";
import { Bar } from "react-chartjs-2";

const ReasonDurationQR = () => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);
  const data = {
    tableHeading: ["Reason", "Duration"],
    tableData: [
      ["A-Shift", "20"],
      ["A-Shift", "20"],
      ["A-Shift", "20"],
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
                            <Bar />
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

export default ReasonDurationQR;
