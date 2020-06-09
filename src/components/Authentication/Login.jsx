import React from "react";
import { Container, Card, CardBody, Input, InputGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "./authentication.css";

const LoginPage = () => {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "fixed",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img src={require("assets/img/logo.png")} alt="logo" className="" />
          <Card className="cardUser mt-5 loginCard">
            <CardBody>
              <div className="inp-grp">
                <div className="mt-2 mb-2">
                  <h6 className="cardsubtext" style={{ fontWeight: 600 }}>
                    Username/Email
                  </h6>
                  <InputGroup className="no-border mt-2">
                    <Input className="phold" placeholder="Type Here" />
                  </InputGroup>
                </div>
                <div className="mt-2 mb-2">
                  <h6 className="cardsubtext" style={{ fontWeight: 600 }}>
                    Password
                  </h6>
                  <InputGroup className="no-border mt-2">
                    <Input className="phold" placeholder="Type Here" />
                  </InputGroup>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Link
                    to="otp"
                    style={{
                      color: "#e4a503",
                      marginRight: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="mt-3 mb-3">
                  <Link to="admin/section1">
                    <button
                      className="button"
                      style={{ marginLeft: "5px", marginRight: "5px" }}
                    >
                      Login
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

export default LoginPage;
