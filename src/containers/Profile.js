import React, { Fragment } from "react";
import { api } from "../services/api";
import { Route } from "react-router-dom";

class Profile extends React.Component {
  state = {
    awards: [],
    marketNews: [],
    watchList: [],
  };

  componentDidMount() {
    // this.fetchNews();
    // this.fetchCompanies();
  }

  // fetchNews = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     fetch(
  //       "https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=US",
  //       {
  //         method: "GET",
  //         headers: {
  //           "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  //           "x-rapidapi-key":
  //             "5988f592a3msh36cd611e9aaeae2p1705a3jsn693188e64232",
  //         },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) =>
  //         this.setState({
  //           marketNews: data.items.result,
  //         })
  //       )
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

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
