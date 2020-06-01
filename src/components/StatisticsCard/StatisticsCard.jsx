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

const StatisticsCard = () => {
  return (
    <>
      <Card className="cardUser ">
        <CardBody>
          <div className="inp-grp">
            <CardText>
              <h5 className="cardheadtext">Statistics</h5>
            </CardText>
            <div className="">
              <Row>
                <Col md="6">
                  <div className="mb-4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p>Daily</p>
                    <button className="success-btn mt-2 mb-2">20%</button>
                    <button className="failure-btn mt-2 mb-2">20% <img src={require('assets/img/arrow-down.svg')} /></button>
                  </div> 
                </Col>
                <Col md="6">
                  <div className="mb-4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p>Weekly</p>
                    <button className="success-btn mt-2 mb-2">20%</button>
                    <button className="failure-btn mt-2 mb-2">20% <img src={require('assets/img/arrow-down.svg')} /></button>
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

export default StatisticsCard;
