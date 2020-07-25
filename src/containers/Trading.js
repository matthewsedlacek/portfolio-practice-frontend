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
        />
        <StockList companies={this.state.searchedCompanies} />
      </div>
    );
  }
}

export default Trading;
