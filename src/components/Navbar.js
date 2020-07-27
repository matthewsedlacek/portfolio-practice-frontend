import React from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Styling
// const link = {
//   width: "100px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   textAlign: "center",
//   color: "white",
// };

const NavBar = (props) => {
  const loggedIn = props.loggedIn;
  return (
    <Nav variant="tabs" defaultActiveKey="/profile">
      <Nav.Item>
        <Nav.Item>
          <div>Portfolio Practice</div>
        </Nav.Item>
        {loggedIn ? (
          <a>
            <div
              // style={link}
              onClick={() => {
                props.handleLogout();
                props.history.push("/login");
              }}
            >
              Sign Out
            </div>
          </a>
        ) : (
          <Nav.Link
            to="/login"
            exact
            // style={link}
            // activeStyle={{ background: "darkblue" }}
          >
            Sign In
          </Nav.Link>
        )}
        {loggedIn ? (
          // <a>Welcome {currentUser.username}</a>
          <React.Fragment>
            <Nav.Item>
              <Nav.Link
                href="/profile"
                // style={link}
                // activeStyle={{ background: "darkblue" }}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="/portfolio"
                // style={link}
                // activeStyle={{ background: "darkblue" }}
              >
                Portfolios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/trading"
                // style={link}
                // activeStyle={{ background: "darkblue" }}
              >
                Trade
              </Nav.Link>
            </Nav.Item>
          </React.Fragment>
        ) : null}
      </Nav.Item>
    </Nav>
  );
};

export default withRouter(NavBar);
