import React from 'react';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { api } from "./services/api";
import { Route, Switch } from "react-router-dom";
import Profile from './containers/Profile'

let activeUser = JSON.parse(localStorage.getItem('currentUser'))

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {}
      }
    };
  }
  
  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token){
      api.auth.getCurrentUser()
      .then(user => {
        this.setState({auth:{...this.state.auth, user:{id:user.id, username:user.username} }})
      })
    }

  }

  // receives username from login form matches to user object in fetched user array and sets
  // object to currentUser in localStorage as string
  login = data => { 
    console.log(data.message)
    localStorage.setItem("token", data.jwt)
    this.setState({auth:{...this.state.auth, user:{id:data.user.id, username: data.user.username} }})
  };


  logout = () => {
    localStorage.removeItem("token")
    this.setState({auth:{user:{}}})
  };

  // handleSignUp = (newUser) => {
  //   let users = this.state.users;
  //   let newUsers = [...users.push(newUser)]
  //   console.log(newUsers, users)
  //   this.setState({
  //     users: newUsers
  //   })
  // }

  render(){
    console.log('test','test')
    return (
        <div>
          <Navbar currentUser={this.state.auth.user} handleLogout={this.logout}/>
          <Switch>
          <div>
          <div id="content">
            <Route
              exact
              path="/login"
              render={props => <Login {...props} onLogin={this.login} />}
            />
            {/* <Route exact path='/signup' component={ () => <Signup currentUser={activeUser} handleSignUp={this.handleSignUp}/>} /> */}
            {/* <Route exact path="/home" component={ () => <Home currentUser={activeUser}/>} /> */}
            {/* { localStorage.currentUser? <Route exact path="/profile" component={ () => <Profile currentUser={activeUser}/>} /> : null}
            { localStorage.currentUser? <Route exact path='/report' component={ () => <Report currentUser={activeUser} />} /> : null}
            { localStorage.currentUser? <Route exact path='/businessquestions' component={ () => <BusinessQuestions currentUser={activeUser} />} />: null}
            { localStorage.currentUser? <Route exact path='/createbusiness' component={() => <CreateBusiness currentUser={activeUser}/>} />: null}
            { localStorage.currentUser? <Redirect to='/home' /> : <Redirect to='/login' />} */}
              </div>
            </div>
          </Switch>
        </div>
    )
  }
}

export default App;

