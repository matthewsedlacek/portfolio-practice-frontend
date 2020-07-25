import React from "react";
import { api } from "../services/api";
import "../stylesheets/Portfolio.css";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import Trading from "./Trading";
import AddPortfolioForm from "../components/portfolio/AddPortfolioForm";

const API = `http://localhost:3000/`;

class Portfolio extends React.Component {
  state = {
    portfolios: [],
    transactions: [],
    companies: [],
    newPortfolio: {
      name: "",
      value: 0,
    },
  };

  componentDidMount() {
    this.fetchPortfolios();
    // this.fetchCompanies();
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
          companies={this.state.companies}
        />
      );
    });
  };

  //   fetchCompanies = () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       api.companyData.getCompanies().then((data) => {
  //         this.setState({ companies: data });
  //       });
  //     }
  //   };

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
        {this.renderPortfolios()}
      </div>
    );
  }
}

export default Portfolio;
