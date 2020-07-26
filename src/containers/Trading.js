import React from "react";
import { api } from "../services/api";
import StockList from "../components/trading/StockList";
import OrderForm from "../components/trading/OrderForm";
import PortfolioInfo from "../components/trading/PortfolioInfo";

class Trading extends React.Component {
  state = {
    portfolios: [],
    companies: [],
    searchedCompanies: [],
    singlePortfolio: [],
    tradeQuantity: 0,
  };

  componentDidMount() {
    this.fetchPortfolios();
    this.fetchCompanies();
  }

  fetchPortfolios = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.userData.getPortfolios().then((data) => {
        this.setState({ portfolios: data });
      });
    }
  };

  fetchCompanies = () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.companyData.getCompanies().then((data) => {
        this.setState({ companies: data, searchedCompanies: data });
      });
    }
  };

  handleCompanySelect = (company) => {
    this.setState({
      searchedCompanies: company,
    });
  };

  handlePortfolioSelect = (portfolio) => {
    console.log(portfolio);
    this.setState({
      singlePortfolio: portfolio,
    });
  };

  handleBuyStock = (e) => {
    e.preventDefault();
    let portfolioValue = this.state.singlePortfolio.value;
    let stock_price = this.state.searchedCompanies.stock_prices[
      this.state.searchedCompanies.stock_prices.length - 1
    ].current_price;
    let quantity = parseInt(this.state.tradeQuantity);
    if (portfolioValue > stock_price * quantity) {
      api.userData
        .newBuyTransaction(
          this.state.searchedCompanies.stock_prices,
          this.state.singlePortfolio,
          this.state.tradeQuantity
        )
        .then((res) => {
          this.fetchPortfolios();
        });
    } else {
      console.log("Insuffienct Cash Available");
    }
  };

  handleSellStock = (e) => {
    e.preventDefault();
    let portfolioValue = this.state.singlePortfolio.value;
    let stock_price = this.state.searchedCompanies.stock_prices[
      this.state.searchedCompanies.stock_prices.length - 1
    ].current_price;
    let quantity = parseInt(this.state.tradeQuantity);
    // change logic to be includes the stock you're selling
    if (portfolioValue > stock_price * quantity) {
      api.userData
        .newBuyTransaction(
          this.state.searchedCompanies.stock_prices,
          this.state.singlePortfolio,
          this.state.tradeQuantity
        )
        .then((res) => {
          this.fetchPortfolios();
        });
    } else {
      console.log("Insuffienct Cash Available");
    }
  };

  handleQuantityChange = (e) => {
    this.setState({ tradeQuantity: e.target.value });
  };

  render() {
    return (
      <div>
        <PortfolioInfo
          portfolios={this.state.portfolios}
          selectPortfolio={this.handlePortfolioSelect}
          singlePortfolio={this.state.singlePortfolio}
        />
        <OrderForm
          companies={this.state.companies}
          selectCompany={this.handleCompanySelect}
          handleQuantityChange={this.handleQuantityChange}
          handleBuyStock={this.handleBuyStock}
          handleSellStock={this.handleSellStock}
          updatedQuantity={this.state.tradeQuantity}
        />
        <StockList companies={this.state.searchedCompanies} />
      </div>
    );
  }
}

export default Trading;
