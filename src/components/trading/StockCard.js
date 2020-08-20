import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const StockCard = (props) => {
  return (
    <div>
      {props.stockPrice.length !== 0 ? (
        <Card>
          <CardActionArea>
            <div key={props.stock.id}>
              <CardMedia
                style={{ height: 200, margin: 10 }}
                title={props.stock.name}
                image={props.stock.logo}
              />
            </div>
            <div>
              <div align="center">
                {props.stock.name}
                <i />
              </div>
              <div align="center">
                <small>{props.stock.sector}</small>
              </div>
            </div>
            <div>
              <span style={{ height: 200, margin: 10 }}>
                <i /> Current Price: $
                {props.stockPrice ? props.stockPrice.c : ""}
              </span>
              <div>
                <span style={{ height: 200, margin: 10 }}>
                  Daily High: ${props.stockPrice ? props.stockPrice.h : ""}{" "}
                </span>
              </div>
              <div>
                <span style={{ height: 200, margin: 10 }}>
                  Daily Low: ${props.stockPrice ? props.stockPrice.l : ""}{" "}
                </span>
              </div>
            </div>
          </CardActionArea>
        </Card>
      ) : null}
    </div>
  );
};

export default StockCard;
