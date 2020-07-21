import React from 'react';
import {api} from '../services/api'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    api.auth.login(this.state.fields)
    .then(res => {
      if (res.message === "Invalid username or password") {
        this.setState({error: true})
      } else {
        this.props.onLogin(res)
        this.props.history.push('/profile')
      }
    })
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Incorrect Password or Username. Please Try again...</h1> : null}
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
            <button type="submit">
              Login
            </button>
          </form>
          New to Portfolio Practice? <Link className="" to="/signup">Signup</Link>
        </div>
      </div>
    );
  }
}

export default Login;