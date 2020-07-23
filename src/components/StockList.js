import React, { Component } from "react";
import StockCard from "./StockCard";

class StockList extends Component {
  //your code here
  // renderStocks = () => {
  //   return this.props.stockPrices.map((soloPrice) => {
  //     return <StockCard key={soloPrice.id} stock={soloPrice} />;
  //   });
  // };

  renderCompanies = () => {
    return this.props.companies.map((soloCompany) => {
      return <StockCard key={soloCompany.id} stock={soloCompany} />;
    });
  };

  render() {
    return (
      <div>
        {/* {this.renderStocks()} */}
        {this.renderCompanies()}
      </div>
    );
  }
}

export default StockList;
