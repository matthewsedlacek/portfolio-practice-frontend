import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "font-awesome/css/font-awesome.min.css";
import Logo from "../stylesheets/logo.png";

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
        <div>
          {/* <i className="fa fa-dollar"></i> */}
          <img alt="h" src={Logo} className="navBarLogo" />
          {/* Portfolio Practice */}
        </div>
        {loggedIn ? (
          <div
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
        {loggedIn ? (
          // <a>Welcome {currentUser.username}</a>
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
                  {/* <Nav.Link */}
                  {/* href="/portfolio"
                    style={link}
                    // activeStyle={{ background: "darkblue" }}
                  >
                    Portfolios */}
                  <a
                    id="navBarButtons"
                    class="btn btn-primary active"
                    href="/portfolio"
                    role="button"
                    size="lg"
                    // className="navBarButtons"
                  >
                    Portfolios
                  </a>
                  {/* </Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={link}></Nav.Link>
                </Nav.Item>
                <Nav.Item id="navBarButtons">
                  {/* <Nav.Link
                  <a ></a>
                    href="/trading"
                    style={link}
                    // activeStyle={{ background: "darkblue" }}
                  > */}
                  <a
                    id="navBarButtons"
                    class="btn btn-primary active"
                    href="/trading"
                    role="button"
                    size="lg"
                    // className="navBarButtons"
                  >
                    Trade
                  </a>
                  {/* Trade */}
                  {/* </Nav.Link> */}
                </Nav.Item>
              </Nav>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(NavBar);
