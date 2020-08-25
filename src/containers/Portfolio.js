import React from "react";
import { api } from "../services/api";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import AddPortfolioForm from "../components/portfolio/AddPortfolioForm";
import Container from "react-bootstrap/Container";

class Portfolio extends React.Component {
  state = {
    portfolios: [],
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
        <Container>
          <PortfolioCard
            currentUser={this.props.currentUser}
            key={soloPortfolio.id}
            portfolio={soloPortfolio}
          />
        </Container>
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
