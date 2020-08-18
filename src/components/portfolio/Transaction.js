import React, { Fragment } from "react";
import { api } from "../../services/api";

class Transaction extends React.Component {
  state = {
    currentPrice: "",
  };

  componentDidMount() {
    this.fetchCurrentStockPrice();
  }

  fetchCurrentStockPrice = () => {
    let individualTicker = this.props.transaction.company.ticker;
    if (this.props) {
      api.stockPrices.getWatchListPrice(individualTicker).then((data) => {
        this.setState({ currentPrice: data });
      });
    }
  };

  render() {
    const { quantity, buy_sell, share_price, value } = this.props.transaction;

    const { ticker, name } = this.props.transaction.company;
    // need to add logic for current stock price
    const currentValue = this.state.currentPrice.c * quantity;
    const gainLoss = currentValue - value;
    const currentPrice = this.state.currentPrice.c * 1;

    return (
      <Fragment>
        <tr>
          <td>{ticker}</td>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{share_price}</td>
          <td>{value.toFixed(2)}</td>
          {/* need to add logic to add current price */}
          <td>{buy_sell === "sell" ? "N/A" : currentPrice.toFixed(2)}</td>
          <td>{buy_sell === "sell" ? "N/A" : currentValue.toFixed(2)}</td>
          <td>{buy_sell === "sell" ? "N/A" : gainLoss.toFixed(2)}</td>
          <td>{buy_sell}</td>
        </tr>
      </Fragment>
    );
  }
}

export default Transaction;
