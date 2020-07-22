import React from "react";

const StockCard = (props) => {
  return (
    <div>
      <br></br>
      <div key={props.stock.id}>
        <div>
          <img alt="unavailable!" src={props.stock.company.logo} />
        </div>
        <div>
          <div>
            {props.stock.company.name}
            <i />
          </div>
          <div>
            <small>{props.stock.company.sector}</small>
          </div>
        </div>
        <div>
          <span>
            <i />${props.stock.current_price}
          </span>
          <div>
            <span>
              <i />
              Daily Change: {props.stock.dollar_change}{" "}
              {props.stock.percent_change}
            </span>
          </div>
          <span>
            <div>
              <button>Buy</button>

              <button>Sell</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
