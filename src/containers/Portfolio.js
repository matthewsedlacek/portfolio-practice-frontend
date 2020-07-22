import React from "react";
import { api } from "../services/api";
import "../stylesheets/Portfolio.css";
import PortfolioCard from "../components/PortfolioCard";
import AddPortfolioForm from "../components/AddPortfolioForm";

const API = `http://localhost:3000/`;

class Portfolio extends React.Component {
  state = {
    portfolios: [],
    transactions: [],
    newPortfolio: [],
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
    let addPortfolio = this.state.singleTransaction;
    this.setState({
      newPortfolio: {
        ...addPortfolio,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = () => {
    console.log(this.state.newPortfolio);
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.newPortfolio.title,
        value: this.state.newPortfolio.value,
        user_id: this.props.currentUser.id,
      }),
    };
    fetch(`${API}`, configObject)
      .then((response) => response.json())
      .then((data) => this.fetchPortfolios());
  };

  render() {
    return (
      <div>
        <AddPortfolioForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newPortfolio={this.state.newPortfolio}
        />
        {this.renderPortfolios()}
      </div>
    );
  }
}

export default Portfolio;
