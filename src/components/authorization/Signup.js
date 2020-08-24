import React from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: "",
        password: "",
      },
    };
  }

  Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://portfoliopractice.com/">
          Portfolio Practice
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    api.newUser.createUser(this.state.fields).then((res) => {
      if (res.error === "failed to create user") {
        this.setState({ error: true });
      } else {
        this.props.onLogin(res);
        this.watchListGenerate();
      }
    });
  };

  watchListGenerate = () => {
    api.newUser.newWatchlist(this.props.currentUser).then((res) => {
      if (res.error === "failed to create user") {
        this.setState({ error: true });
      } else {
        this.props.history.push("/profile");
      }
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <div>
          {this.state.error ? (
            <h1>
              Username taken or Password not provided. Please Try again...
            </h1>
          ) : null}
          <div>
            <form className="loginForm" onSubmit={this.handleSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={fields.username}
                onChange={this.handleChange}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                autoFocus
                value={fields.password}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </form>
            Already registered?{" "}
            <Link className="" to="/login">
              Log in
            </Link>
          </div>
        </div>
        <Box mt={8}>
          <div>{this.Copyright()}</div>
        </Box>
      </Container>
    );
  }
}

export default Signup;
