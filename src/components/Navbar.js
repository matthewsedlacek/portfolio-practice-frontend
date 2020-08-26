import React from "react";
import { withRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "font-awesome/css/font-awesome.min.css";
import Logo from "../stylesheets/logo2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Styling
const link = {
  padding: "10px",
};

const NavBar = (props) => {
  const loggedIn = props.loggedIn;
  return (
    <div className="navBar">
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <div class="logoBox">
                <img
                  alt="Portfolio Practice"
                  src={Logo}
                  className="navBarLogo"
                />
              </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              {loggedIn ? (
                <div
                  class="box"
                  onClick={() => {
                    props.handleLogout();
                    props.history.push("/login");
                  }}
                >
                  Sign Out
                </div>
              ) : (
                <div to="/login" exact></div>
              )}
            </Col>
          </Row>
        </Container>
        {loggedIn ? (
          <Container>
            <React.Fragment>
              <div class="box">
                <Nav>
                  <Nav.Item>
                    <a
                      id="navBarButtons"
                      class="btn btn-primary active"
                      href="/profile"
                      role="button"
                      size="lg"
                    >
                      Home
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={link}></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <a
                      id="navBarButtons"
                      class="btn btn-primary active"
                      href="/portfolio"
                      role="button"
                      size="lg"
                    >
                      Portfolios
                    </a>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={link}></Nav.Link>
                  </Nav.Item>
                  <Nav.Item id="navBarButtons">
                    <a
                      id="navBarButtons"
                      class="btn btn-primary active"
                      href="/trading"
                      role="button"
                      size="lg"
                    >
                      Trade
                    </a>
                  </Nav.Item>
                </Nav>
              </div>
            </React.Fragment>
          </Container>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(NavBar);
