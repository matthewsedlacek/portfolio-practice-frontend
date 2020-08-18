import React, { Component } from "react";
import StockCard from "./StockCard";

class StockList extends Component {
  render() {
    return (
      <div>
        <StockCard
          key={this.props.companies.id}
          stock={this.props.companies}
          stockPrice={this.props.stockInfo}
        />
      </div>
    );
  }
}

export default StockList;
