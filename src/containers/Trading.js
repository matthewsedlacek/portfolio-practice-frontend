import React from "react";
import { api } from "../services/api";
import StockList from "../components/StockList";
// need to change nesting on backend. Companies has many stock_prices

class Trading extends React.Component {
  state = {
    portfolios: [],
    stockPrices: [],
  };

  componentDidMount() {
    this.fetchStockPrices();
    this.fetchPortfolios();
  }

  fetchStockPrices = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.stockPrices.getStockPrices().then((data) => {
        this.setState({ stockPrices: data });
      });
    }
  };

  fetchPortfolios = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.userData.getPortfolios().then((data) => {
        this.setState({ portfolios: data });
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <StockList stockPrices={this.state.stockPrices} />
      </div>
    );
  }
}

export default Trading;
