import React from "react";
import { api } from "../services/api";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import AddPortfolioForm from "../components/portfolio/AddPortfolioForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Portfolio extends React.Component {
  state = {
    portfolios: [],
    newPortfolio: {
      name: "",
      value: 0,
    },
    errorMessage: 0,
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
        if (res.id === null) {
          this.setState({
            errorMessage: "Portfolio Amount must be a number greater than $100",
          });
          this.fetchPortfolios();
        } else {
          this.fetchPortfolios();
        }
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
        <br></br>
        <Row>
          <Col>
            {this.state.errorMessage !== 0 ? (
              <Alert align="center" variant="danger">
                <Alert.Heading>Transaction Failed!</Alert.Heading>
                <p>{this.state.errorMessage}</p>
              </Alert>
            ) : null}
          </Col>
        </Row>
        {this.renderPortfolios()}
      </div>
    );
  }
}

export default Portfolio;
