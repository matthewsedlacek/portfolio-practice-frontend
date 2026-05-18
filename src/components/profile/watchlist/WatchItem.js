import React from "react";
import { api } from "../../../services/api";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";

class WatchItem extends React.Component {
  state = {
    watchItemCurrentPrice: "",
  };

  componentDidMount() {
    this.fetchCurrentStockPrice();
  }

  fetchCurrentStockPrice = () => {
    const ticker = this.props.watchedStock.company.ticker;
    api.stockPrices.getWatchListPrice(ticker).then((data) => {
      this.setState({ watchItemCurrentPrice: data });
    });
  };

  render() {
    const { ticker } = this.props.watchedStock.company;
    const { c: currentPrice, pc: previousClose } = this.state.watchItemCurrentPrice;

    const percentChange = currentPrice && previousClose
      ? (((currentPrice - previousClose) / previousClose) * 100).toFixed(2)
      : null;
    const changeColor = percentChange >= 0 ? "#2e7d32" : "#c62828";

    return (
      <TableRow>
        <TableCell>{ticker}</TableCell>
        <TableCell>
          {currentPrice ? `$${currentPrice.toFixed(2)}` : "—"}
        </TableCell>
        <TableCell style={{ color: percentChange !== null ? changeColor : "inherit", fontWeight: 600 }}>
          {percentChange !== null ? `${percentChange >= 0 ? "+" : ""}${percentChange}%` : "—"}
        </TableCell>
        <TableCell padding="none">
          <IconButton
            size="small"
            aria-label="delete"
            onClick={() => this.props.handleDelete(this.props.watchedStock)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}

export default WatchItem;
