import React, { Fragment } from "react";

const Transaction = (props) => {
  const {
    company_id,
    current_price,
    dollar_change,
  } = props.transaction.stock_price;

  const { quantity, buy_sell } = props.transaction;
  //   console.log(props.transaction.stock_price);

  const { ticker, name } = props.transaction.stock_price.company;
  //   console.log(props.transaction.stock_price.company);

  //   const filterCompany = () => {
  //     let companyInfo = "";
  //     return props.companies.filter((selectedCompany) => {
  //       const companyInfo = selectedCompany.id === props.transaction.stock_price;
  //     });
  //   };

  return (
    <Fragment>
      <tr>
        <td>{ticker}</td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{current_price}</td>
        <td>{current_price}</td>
        <td>{quantity * current_price}</td>
        <td>{dollar_change}</td>
        <td>{buy_sell}</td>
      </tr>
    </Fragment>
  );
};

export default Transaction;
