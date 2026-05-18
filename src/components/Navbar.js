import React from "react";
import { withRouter } from "react-router-dom";
import Logo from "../stylesheets/logo2.png";
import Container from "react-bootstrap/Container";
import Button from "@material-ui/core/Button";

const Navbar = (props) => {
  const loggedIn = props.loggedIn;
  return (
    <div className="navBar">
      <Container>
        <div className="navBarInner">
          <div className="logoBox">
            <img alt="Portfolio Practice" src={Logo} className="navBarLogo" />
          </div>
          {loggedIn && (
            <div className="navBarLinks">
              <Button className="navBarButton" href="/profile">Home</Button>
              <Button className="navBarButton" href="/portfolio">Portfolios</Button>
              <Button className="navBarButton" href="/trading">Trade</Button>
              <Button
                className="navBarButton navBarSignOut"
                onClick={() => {
                  props.handleLogout();
                  props.history.push("/login");
                }}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default withRouter(Navbar);
