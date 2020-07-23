import React from "react";

const StockCard = (props) => {
  console.log(props.stock.stock_prices);

  return (
    <div>
      <br></br>
      <div key={props.stock.id}>
        <div>
          <img alt="unavailable!" src={props.stock.logo} />
        </div>
        <div>
          <div>
            {props.stock.name}
            <i />
          </div>
          <div>
            <small>{props.stock.sector}</small>
          </div>
        </div>
        <div>
          <span>
            <i />$
            {
              props.stock.stock_prices[props.stock.stock_prices.length - 1]
                .current_price
            }
          </span>
          <div>
            <span>
              <i />
              Daily Change:{" "}
              {
                props.stock.stock_prices[props.stock.stock_prices.length - 1]
                  .dollar_change
              }{" "}
              {
                props.stock.stock_prices[props.stock.stock_prices.length - 1]
                  .percent_change
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
