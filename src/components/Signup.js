import React from 'react';
import {api} from '../services/api'
import { Link } from 'react-router-dom'


class Signup extends React.Component {
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
    api.newUser.createUser(this.state.fields)
    .then(res => {
      if (res.error === "failed to create user") {
        this.setState({error: true})
      } else {
        console.log(res)
        this.props.onLogin(res)
        console.log(this.props)
        this.props.history.push('/portfolio')
      }
    })
  };
    
    
      render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Username taken or Password not provided. Please Try again...</h1> : null}
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
              Sign Up
            </button>
          </form>
          Already registered? <Link className="" to="/login">Log in</Link>
        </div>
      </div>

    )
    }
}

export default Signup;



    // const history = useHistory()

    // const handleSubmit = event => {
    //     event.preventDefault();

    //     console.log(event.target.username.value)
    //     console.log(event.target.password.value)


    //     const configObj = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             'username': event.target.username.value,
    //             'password': event.target.password.value,
    //         })
    //     }

    //     fetch('http://localhost:3000/users', configObj)
    //     .then(res => res.json())
    //     .then(json => {
    //         props.handleSignUp(json)
    //         history.push(
    //             {pathname:  "/login"}
    //         )
    //     })
    //     .catch(error => alert(error.message))
    // }
    // render() {
    // return (
    //     <div>
    //         <form onSubmit={(event) => handleSubmit(event)}>
    //             <h1>Create New User</h1>
    //             <div><input name='username' placeholder='username' type='text' /></div>
    //             <div><input name='password' placeholder='password' type='text' /></div>
    //             <button type='submit' value='Sign Up'>Sign up</button>
    //         </form>

    //     </div>
    // )