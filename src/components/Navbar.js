import React from "react";
import { Link, withRouter } from "react-router-dom";

// Styling
const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  textAlign: "center",
  color: "white",
};

const Navbar = (props) => {
  const loggedIn = props.loggedIn;
  return (
    <div>
      <h2>
        <div>Portfolio Practice</div>
      </h2>
      {loggedIn ? (
        <a>
          <div
            style={link}
            onClick={() => {
              props.handleLogout();
              props.history.push("/login");
            }}
          >
            Sign Out
          </div>
        </a>
      ) : (
        <Link
          to="/login"
          exact
          style={link}
          activeStyle={{ background: "darkblue" }}
        >
          Sign In
        </Link>
      )}
      <div>
        {loggedIn ? (
          // <a>Welcome {currentUser.username}</a>
          <React.Fragment>
            <Link
              to="/profile"
              exact
              style={link}
              activeStyle={{ background: "darkblue" }}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              exact
              style={link}
              activeStyle={{ background: "darkblue" }}
            >
              Portfolios
            </Link>
            <Link
              to="/trading"
              exact
              style={link}
              activeStyle={{ background: "darkblue" }}
            >
              Trade
            </Link>
          </React.Fragment>
        ) : null}
        <div></div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
