import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Navbar = props => {
    const currentUser = props.currentUser;
    const loggedIn = !!props.currentUser.id;
    return (
      <div>
        <Link to="/">
          <h2>
            <div>Portfolio Practice</div>
          </h2>
        </Link>
        <div>
          <Link to="/portfolio">
            Portfolio
          </Link>
          <Link to="/trading">
            Trading
          </Link>
          {loggedIn ? (
            <a>Welcome {currentUser.username}</a>
          ) : null}
          {loggedIn ? (
            <a>
              <div
                onClick={() => {
                  props.handleLogout();
                  props.history.push("/login");
                }}
              >
                Sign Out
              </div>
            </a>
          ) : (
            <Link to="/login">
              <div>Sign In</div>
            </Link>
          )}
        <div></div>

        </div>
      </div>
    );
  };



export default withRouter(Navbar);