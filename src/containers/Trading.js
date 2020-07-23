import React from "react";
import { api } from "../services/api";
import StockList from "../components/StockList";
import OrderForm from "../components/OrderForm";
// need to change nesting on backend. Companies has many stock_prices

class Trading extends React.Component {
  state = {
    portfolios: [],
    stockPrices: [],
    companies: [],
    searchedCompanies: [],
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

  filterCompanies = (event) => {
    console.log(event.target.value);
    let newCompaniesList = this.state.companies.filter((foundCompanies) =>
      foundCompanies.name.includes(event.target.value)
    );
    this.setState({ searchedCompanies: newCompaniesList });
  };

  render() {
    return (
      <div>
        <OrderForm
          portfolios={this.state.portfolios}
          stockPrices={this.state.stockPrices}
          onfilterCompanies={this.filterCompanies}
          companies={this.state.searchedCompanies}
        />
        <StockList companies={this.state.searchedCompanies} />
      </div>
    );
  }
}

export default Trading;
