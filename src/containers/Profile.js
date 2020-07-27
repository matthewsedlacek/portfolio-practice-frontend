import React, { Fragment } from "react";
import { api } from "../services/api";
import { Route } from "react-router-dom";

class Profile extends React.Component {
  state = {
    awards: [],
    news: [],
    watchList: [],
  };

  componentDidMount() {
    this.fetchNews();
    // this.fetchCompanies();
  }

  fetchNews = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.marketNews.getNews().then((data) => {
        this.setState({ news: data });
      });
    }
  };

  render() {
    return (
      <Fragment>
        <h1>Welcome {this.props.currentUser.username}</h1>
        {/* <div>{this.renderPortfolios()}</div> */}
        {/* <Route exact path="/portfolio" render={props => <Portfolio {...props} currentUser={this.props.currentUser} />}/> */}
      </Fragment>
    );
  }
}

export default Profile;
