import React from "react";
import { api } from "../services/api";
import "../stylesheets/Portfolio.css";

class Portfolio extends React.Component {
  state = {
    portfolios: [],
    transactions: [],
    userPortfolios: [],
    currentPortfolio: [],
  };

  componentDidMount() {
    this.fetchPortfolios();
    this.fetchTransactions();
  }

  fetchPortfolios = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.userData.getPortfolios().then((data) => {
        this.setState({ portfolios: data }, this.filterPortfolios());
      });
    }
  };

  fetchTransactions = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.userData.getTransactions().then((data) => {
        this.setState({ transactions: data });
      });
    }
  };

  filterPortfolios = () => {
    let portfolioList = [...this.state.portfolios];
    console.log(portfolioList);
    portfolioList = portfolioList.filter(
      (portfolio) => portfolio.user_id === this.props.currentUser.id
    );
    this.setState({
      userPortfolios: portfolioList,
    });
  };

  render() {
    console.log(this.state.portfolios[0]);
    return (
      <div>
        <h1>{this.state.userPortfolios}</h1>
      </div>
    );
  }
}

export default Portfolio;
