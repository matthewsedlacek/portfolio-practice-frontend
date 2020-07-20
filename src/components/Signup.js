import React from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';



const Signup = (props) => {
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault();

        console.log(event.target.username.value)
        console.log(event.target.password.value)


        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': event.target.username.value,
                'password': event.target.password.value,
            })
        }

        fetch('http://localhost:3000/users', configObj)
        .then(res => res.json())
        .then(json => {
            props.handleSignUp(json)
            history.push(
                {pathname:  "/login"}
            )
        })
        .catch(error => alert(error.message))
    }
    
    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Create New User</h1>
                <div><input name='username' placeholder='username' type='text' /></div>
                <div><input name='password' placeholder='password' type='text' /></div>
                <button type='submit' value='Sign Up'>Sign up</button>
            </form>
            Already registered? <Link className="" to="/login">Log in</Link>
        </div>
    )
}

export default Signup;