import React from "react";
import { api } from "../services/api";
import StockList from "../components/trading/StockList";
import OrderForm from "../components/trading/OrderForm";
import PortfolioInfo from "../components/trading/PortfolioInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Trading extends React.Component {
  state = {
    portfolios: [],
    companies: [],
    searchedCompanies: [],
    singlePortfolio: [],
    tradeQuantity: 0,
    currentStockPrice: [],
    errorMessage: 0,
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

  fetchCurrentStockPrice = () => {
    let individualTicker = this.state.searchedCompanies.ticker;
    if (this.props) {
      api.stockPrices.getCurrentStockPrice(individualTicker).then((data) => {
        this.setState({ currentStockPrice: data });
      });
    }
  };

  handleCompanySelect = (company) => {
    this.setState({ searchedCompanies: company }, () => {
      this.fetchCurrentStockPrice();
    });
  };

  handlePortfolioSelect = (portfolio) => {
    this.setState({ singlePortfolio: portfolio });
  };

  handleBuyStock = (e) => {
    e.preventDefault();
    let availableCash = this.state.singlePortfolio.available_cash;
    let stock_price = parseFloat(this.state.currentStockPrice.c);
    let quantity = parseInt(this.state.tradeQuantity);
    let companyId = parseInt(this.state.searchedCompanies.id);
    let tradeValue = stock_price * quantity;
    if (availableCash >= stock_price * quantity) {
      api.userData
        .newBuyTransaction(
          this.state.singlePortfolio,
          quantity,
          tradeValue,
          companyId,
          stock_price
        )
        .then(() => this.buyStock());
    } else {
      this.setState({ errorMessage: "Insufficient cash available" });
    }
  };

  buyStock = () => {
    let stock_price = this.state.currentStockPrice.c;
    let quantity = parseInt(this.state.tradeQuantity);
    let tradeValue = stock_price * quantity;
    api.userData
      .stockPurchase(this.state.singlePortfolio, tradeValue)
      .then(() => this.props.history.push("/portfolio"));
  };

  handleSellStock = (e) => {
    e.preventDefault();
    let companyId = this.state.searchedCompanies.id;
    let transactionsList = this.state.singlePortfolio.transactions;

    if (!transactionsList) {
      this.setState({ errorMessage: "Please select a portfolio" });
      return;
    }

    let transactionCompaniesArray = transactionsList.filter(
      (t) => t.company_id === companyId
    );
    let totalBuyQuantities = transactionCompaniesArray
      .filter((t) => t.buy_sell === "buy")
      .map((t) => t.quantity)
      .reduce((a, b) => a + b, 0);
    let totalSellQuantities = transactionCompaniesArray
      .filter((t) => t.buy_sell === "sell")
      .map((t) => t.quantity)
      .reduce((a, b) => a + b, 0);

    let stock_price = this.state.currentStockPrice.c;
    let quantity = parseInt(this.state.tradeQuantity);
    let tradeValue = stock_price * quantity;

    if (totalBuyQuantities >= totalSellQuantities + quantity) {
      api.userData
        .newSellTransaction(
          this.state.searchedCompanies,
          this.state.singlePortfolio,
          this.state.tradeQuantity,
          tradeValue,
          stock_price
        )
        .then(() => this.sellStock());
    } else {
      this.setState({ errorMessage: "You do not own the specified shares" });
    }
  };

  sellStock = () => {
    let companyId = this.state.searchedCompanies.id;
    let transactionsList = this.state.singlePortfolio.transactions;
    let transactionCompaniesArray = transactionsList.filter(
      (t) => t.company_id === companyId
    );
    let buyTransactions = transactionCompaniesArray.filter(
      (t) => t.buy_sell === "buy"
    );
    let totalBuyQuantities = buyTransactions.map((t) => t.quantity).reduce((a, b) => a + b, 0);
    let totalBuyValues = buyTransactions.map((t) => t.value).reduce((a, b) => a + b, 0);
    let buyPricePerShare = totalBuyValues / totalBuyQuantities;

    let stock_price = this.state.currentStockPrice.c;
    let quantity = parseInt(this.state.tradeQuantity);
    let totalGainLoss = (stock_price - buyPricePerShare) * quantity;
    let tradeValue = stock_price * quantity;

    api.userData
      .stockSale(this.state.singlePortfolio, tradeValue, totalGainLoss)
      .then(() => this.props.history.push("/portfolio"));
  };

  handleQuantityChange = (e) => {
    this.setState({ tradeQuantity: e.target.value });
  };

  render() {
    return (
      <Container style={{ paddingTop: 24 }}>
        {this.state.errorMessage !== 0 && (
          <Alert variant="danger" onClose={() => this.setState({ errorMessage: 0 })} dismissible>
            <Alert.Heading>Transaction Failed</Alert.Heading>
            <p>{this.state.errorMessage}</p>
          </Alert>
        )}
        <Row>
          <Col md={3} className="orderFormContainer">
            <PortfolioInfo
              portfolios={this.state.portfolios}
              selectPortfolio={this.handlePortfolioSelect}
              singlePortfolio={this.state.singlePortfolio}
            />
          </Col>
          <Col md={4} className="orderFormContainer">
            <OrderForm
              companies={this.state.companies}
              selectCompany={this.handleCompanySelect}
              handleQuantityChange={this.handleQuantityChange}
              handleBuyStock={this.handleBuyStock}
              handleSellStock={this.handleSellStock}
              updatedQuantity={this.state.tradeQuantity}
            />
          </Col>
          <Col md={5}>
            <StockList
              companies={this.state.searchedCompanies}
              stockInfo={this.state.currentStockPrice}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Trading;
