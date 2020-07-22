import React, { Fragment } from "react";
import Transaction from "./Transaction";

const PortfolioCard = (props) => {
  const renderTransactions = () => {
    // debugger;
    console.log(props);
    return props.portfolio.transactions.map((selectedTransaction) => {
      return <Transaction transaction={selectedTransaction} />;
    });
  };

  return (
    <Fragment>
      <div>
        <h1>{props.portfolio.name}</h1>
      </div>
      <div>
        <h2>{props.portfolio.value}</h2>
      </div>

      <table>
        <tbody>
          <tr>
            <th>
              <h3>Ticker</h3>
            </th>
            <th>
              <h3>Name</h3>
            </th>
            <th>
              <h3>Quantity</h3>
            </th>
            <th>
              <h3>Purchase Price</h3>
            </th>
            <th>
              <h3>Current Price</h3>
            </th>
            <th>
              <h3>Total Value</h3>
            </th>
            <th>
              <h3>Today's Change</h3>
            </th>
          </tr>
          {renderTransactions()}
        </tbody>
      </table>
    </Fragment>
  );
};

export default PortfolioCard;
