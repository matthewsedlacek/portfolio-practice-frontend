import React from "react";
import NavBar from "./components/NavBar";
import Login from "./components/authorization/Login";
import Signup from "./components/authorization/Signup";
import { api } from "./services/api";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Route} from "react-router-dom";
import Profile from "./containers/Profile";
import Portfolio from "./containers/Portfolio";
import Trading from "./containers/Trading";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      auth: {
        user: {},
      },
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then((data) => {
        console.log(data);
        this.setState({
          auth: {
            ...this.state.auth,
            user: { id: data.user.id, username: data.user.username },
          },
          loggedIn: true,
        });
      });
    }
  }

  login = (data) => {
    console.log(data);
    localStorage.setItem("token", data.jwt);
    this.setState({
      auth: {
        ...this.state.auth,
        user: { id: data.user.id, username: data.user.username },
      },
      loggedIn: true,
    });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} }, loggedIn: false });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar
            currentUser={this.state.auth.user}
            handleLogout={this.logout}
            loggedIn={this.state.loggedIn}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} onLogin={this.login} />}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                onLogin={this.login}
                currentUser={this.state.auth.user}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile {...props} currentUser={this.state.auth.user} />
            )}
          />
          <Route
            exact
            path="/portfolio"
            render={(props) => (
              <Portfolio {...props} currentUser={this.state.auth.user} />
            )}
          />
          <Route
            exact
            path="/trading"
            render={(props) => (
              <Trading {...props} currentUser={this.state.auth.user} />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
