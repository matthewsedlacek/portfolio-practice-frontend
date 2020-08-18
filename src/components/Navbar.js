import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "font-awesome/css/font-awesome.min.css";
import Logo from "../stylesheets/logo2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Styling;
const link = {
  // width: "5px",
  padding: "10px",
  // margin: "0 0px 0px",
  // background: "blue",
  // textDecoration: "none",
  // textAlign: "center",
  // color: "white",
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
                {/* <i className="fa fa-dollar"></i> */}
                <img
                  alt="Portfolio Practice"
                  src={Logo}
                  className="navBarLogo"
                />
                {/* Portfolio Practice */}
              </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              {loggedIn ? (
                <div
                  class="box"
                  // style={link}
                  onClick={() => {
                    props.handleLogout();
                    props.history.push("/login");
                  }}
                >
                  Sign Out
                </div>
              ) : (
                <div
                  to="/login"
                  exact
                  // style={link}
                  // activeStyle={{ background: "darkblue" }}
                >
                  {/* Sign In */}
                </div>
              )}
            </Col>
          </Row>
        </Container>
        {loggedIn ? (
          // <a>Welcome {currentUser.username}</a>
          <Container>
            <React.Fragment>
              <div class="box">
                <Nav>
                  <Nav.Item>
                    {/* <Nav.Link */}
                    <a
                      id="navBarButtons"
                      class="btn btn-primary active"
                      href="/profile"
                      role="button"
                      size="lg"
                      // className="navBarButtons"
                    >
                      Home
                    </a>
                    {/* </Nav.Link> */}
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

export default NavBar;
