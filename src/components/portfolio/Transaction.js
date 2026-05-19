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
    const { quantity, buy_sell } = this.props.transaction;
    const share_price = parseFloat(this.props.transaction.share_price) || 0;
    const value = parseFloat(this.props.transaction.value) || 0;

    const { ticker, name } = this.props.transaction.company;
    const currentValue = this.state.currentPrice.c * quantity;
    const gainLoss = currentValue - value;
    const currentPrice = this.state.currentPrice.c * 1;

    const gainLossColor = gainLoss >= 0 ? "#2e7d32" : "#c62828";

    return (
      <Fragment>
        <tr>
          <td>{ticker}</td>
          <td>{name}</td>
          <td style={{ textAlign: "right" }}>{quantity}</td>
          <td style={{ textAlign: "right" }}>{share_price}</td>
          <td style={{ textAlign: "right" }}>{value.toFixed(2)}</td>
          <td style={{ textAlign: "right" }}>{buy_sell === "sell" ? "N/A" : currentPrice.toFixed(2)}</td>
          <td style={{ textAlign: "right" }}>{buy_sell === "sell" ? "N/A" : currentValue.toFixed(2)}</td>
          <td style={{ textAlign: "right", color: buy_sell === "sell" ? "inherit" : gainLossColor, fontWeight: 600 }}>
            {buy_sell === "sell" ? "N/A" : (gainLoss >= 0 ? "+" : "") + gainLoss.toFixed(2)}
          </td>
          <td style={{ textAlign: "center", textTransform: "capitalize" }}>{buy_sell}</td>
        </tr>
      </Fragment>
    );
  }
}

export default Transaction;
