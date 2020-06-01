import React from "react";
import "../Tabs/tabs.css";
import {
  Card,
  CardBody,
  CardText,
  Input,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const WorstPerformerCard = () => {
  return (
    <>
      <Card className="cardUser mt-3 mb-3">
        <CardBody>
          <div className="inp-grp">
            <CardText>
              <h5 className="cardheadtext">Worst Performer</h5>
            </CardText>
            <div className="">
              <Row>
                <Col md="6">
                  <div
                    className="mb-4"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p>Daily</p>
                    <h6 style={{ textTransform: "none", fontWeight: "600" }}>
                      Breakdown
                    </h6>
                  </div>
                </Col>
                <Col md="6">
                  <div
                    className="mb-4"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p>Weekly</p>
                    <h6 style={{ textTransform: "none", fontWeight: "600" }}>
                      Tool Check
                    </h6>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default WorstPerformerCard;
