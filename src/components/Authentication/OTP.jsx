import React from "react";
import { Container, Card, CardBody, Input, InputGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "./authentication.css";
import { isPropertySignature } from "typescript";

const OtpPage = (props) => {
  const regnumber = ["+91 620232232"];
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5%"
          }}
        >
          <img src={require("assets/img/logo.png")} alt="logo" className="" />
          <Card className="cardUser mt-5 loginCard">
            <CardBody>
              <div className="inp-grp">
                <div className="mt-2 mb-2">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h6 className="cardsubtext" style={{ fontWeight: 600 }}>
                      Enter OTP
                    </h6>
                    <a href="#" style={{ textDecoration: "none" }}>
                      <p style={{ color: "#e4a503" }}>Send OTP</p>
                    </a>
                  </div>
                  <InputGroup className="no-border mt-3">
                    <Input className="phold" placeholder="Type Here" />
                  </InputGroup>
                  <p className="mt-4" style={{ fontSize: "0.75rem" }}>
                    OTP will be sent on registered number {regnumber}
                  </p>
                </div>
                <div className="mt-2 mb-2">
                  <h6 className="cardsubtext" style={{ fontWeight: 600 }}>
                    New Password
                  </h6>
                  <InputGroup className="no-border mt-2">
                    <Input
                      className="phold"
                      type="password"
                      placeholder="Type Here"
                    />
                  </InputGroup>
                </div>
                <div className="mt-2 mb-2">
                  <h6 className="cardsubtext" style={{ fontWeight: 600 }}>
                    Confirm New Password
                  </h6>
                  <InputGroup className="no-border mt-2">
                    <Input
                      className="phold"
                      type="password"
                      placeholder="Type Here"
                    />
                  </InputGroup>
                </div>
              </div>
              <div
                style={{
                  float: "right",
                }}
              >
                <div className="mt-3 mb-3">
                  <Link to="login">
                    <button
                      className="button"
                      style={{ marginLeft: "5px", marginRight: "5px" }}
                    >
                      Save
                    </button>
                  </Link>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default OtpPage;
