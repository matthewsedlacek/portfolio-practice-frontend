import React, { Fragment } from "react";

const Transaction = (props) => {
  const {
    company_id,
    current_price,
    dollar_change,
  } = props.transaction.stock_price;

  const { quantity } = props.transaction;
  console.log(props.transaction.stock_price);

  return (
    <Fragment>
      <tr>
        <td>{company_id}</td>
        <td>{company_id}</td>
        <td>{quantity}</td>
        <td>{current_price}</td>
        <td>{current_price}</td>
        <td>{quantity * current_price}</td>
        <td>{dollar_change}</td>
      </tr>
    </Fragment>
  );
};

export default Transaction;
