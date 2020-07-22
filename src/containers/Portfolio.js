import React from "react";
import { api } from "../services/api";
import "../stylesheets/Portfolio.css";
import PortfolioCard from "../components/PortfolioCard";
import Trading from "./Trading";
import AddPortfolioForm from "../components/AddPortfolioForm";

const API = `http://localhost:3000/`;

class Portfolio extends React.Component {
  state = {
    portfolios: [],
    transactions: [],
    newPortfolio: {
      name: "",
      value: 0,
    },
  };

  componentDidMount() {
    this.fetchPortfolios();
  }

  fetchPortfolios = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.userData.getPortfolios().then((data) => {
        this.setState({ portfolios: data });
      });
    }
  };

  renderPortfolios = () => {
    return this.state.portfolios.map((soloPortfolio) => {
      return (
        <PortfolioCard
          currentUser={this.props.currentUser}
          key={soloPortfolio.id}
          portfolio={soloPortfolio}
        />
      );
    });
  };

  handleChange = (e) => {
    const newFields = {
      ...this.state.newPortfolio,
      [e.target.name]: e.target.value,
    };
    this.setState({ newPortfolio: newFields });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.currentUser);
    api.userData
      .newPortfolio(this.state.newPortfolio, this.props.currentUser)
      .then((res) => {
        this.fetchPortfolios();
      });
  };

  render() {
    return (
      <div>
        <AddPortfolioForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newPortfolio={this.state.newPortfolio}
        />
        <Trading
          portfolios={this.state.portfolios}
          currentUser={this.props.currentUser}
        />
        {this.renderPortfolios()}
      </div>
    );
  }
}

export default Portfolio;
