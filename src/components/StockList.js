import React, { Component } from "react";
import StockCard from "./StockCard";

class StockList extends Component {
  //your code here
  renderStocks = () => {
    return this.props.stockPrices.map((soloPrice) => {
      return <StockCard key={soloPrice.id} stock={soloPrice} />;
    });
  };

  render() {
    return <div>{this.renderStocks()}</div>;
  }
}

export default StockList;
