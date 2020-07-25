import React from "react";

const StockCard = (props) => {
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
            {props.stockPrice
              ? props.stockPrice[props.stockPrice.length - 1].current_price
              : ""}
          </span>
          <div>
            <span>
              <i />
              Daily Change:
              {props.stockPrice
                ? props.stockPrice[props.stockPrice.length - 1].dollar_change
                : ""}{" "}
              {props.stockPrice
                ? props.stockPrice[props.stockPrice.length - 1].percent_change
                : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
