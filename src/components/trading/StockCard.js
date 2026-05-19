import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const StockCard = ({ stock, stockPrice }) => {
  if (!stockPrice || stockPrice.length === 0) return null;

  const yahooLink = `https://finance.yahoo.com/quote/${stock.ticker}`;
  const priceChange = stockPrice.c - stockPrice.pc;
  const priceChangeColor = priceChange >= 0 ? "#2e7d32" : "#c62828";

  return (
    <Card>
      <CardActionArea href={yahooLink} rel="noopener noreferrer" target="_blank">
        <CardMedia
          style={{ height: 160, backgroundSize: "contain", margin: "12px 24px 0" }}
          title={stock.name}
          image={stock.logo || `https://financialmodelingprep.com/image-stock/${stock.ticker}.png`}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>{stock.name}</Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {stock.ticker} · {stock.sector}
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
            <div>
              <Typography variant="body2" color="textSecondary">Current Price</Typography>
              <Typography variant="h6">${stockPrice.c?.toFixed(2)}</Typography>
            </div>
            <div>
              <Typography variant="body2" color="textSecondary">Change</Typography>
              <Typography variant="h6" style={{ color: priceChangeColor }}>
                {priceChange >= 0 ? "+" : ""}{priceChange.toFixed(2)}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="textSecondary">Day High</Typography>
              <Typography variant="body1">${stockPrice.h?.toFixed(2)}</Typography>
            </div>
            <div>
              <Typography variant="body2" color="textSecondary">Day Low</Typography>
              <Typography variant="body1">${stockPrice.l?.toFixed(2)}</Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StockCard;
