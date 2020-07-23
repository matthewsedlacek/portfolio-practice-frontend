import React from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

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
        this.props.history.push("/profile");
      }
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? (
          <h1>Username taken or Password not provided. Please Try again...</h1>
        ) : null}
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Username </label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Password </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          Already registered?{" "}
          <Link className="" to="/login">
            Log in
          </Link>
        </div>
      </div>
    );
  }
}

export default Signup;
