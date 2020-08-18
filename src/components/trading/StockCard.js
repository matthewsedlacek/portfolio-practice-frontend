import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const StockCard = (props) => {
  return (
    <div>
      {props.stockPrice ? (
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
              {/* <div>
                <span style={{ height: 200, margin: 10 }}>
                  <i />
                  Daily Change:{" "}
                  {props.stockPrice
                    ? props.stockPrice.c - props.stockPrice.pc
                    : ""}{" "}
                  {props.stockPrice ? props.stockPrice : ""}
                </span>
              </div> */}
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
