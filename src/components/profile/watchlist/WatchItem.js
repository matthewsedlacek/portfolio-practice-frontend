import React from "react";
import { api } from "../../../services/api";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

class WatchItem extends React.Component {
  state = {
    watchItemCurrentPrice: "",
  };

  componentDidMount() {
    this.fetchCurrentStockPrice();
  }

  fetchCurrentStockPrice = () => {
    let individualTicker = this.props.watchedStock.company.ticker;
    if (this.props) {
      api.stockPrices.getWatchListPrice(individualTicker).then((data) => {
        this.setState({ watchItemCurrentPrice: data });
      });
    }
  };

  handleClickDelete = (watchedStock) => {
    this.props.handleDelete(watchedStock);
  };

  render() {
    const { ticker } = this.props.watchedStock.company;
    const currentPrice = this.state.watchItemCurrentPrice.c;
    const previousClose = this.state.watchItemCurrentPrice.pc;
    const percentChange = (
      ((currentPrice - previousClose) / currentPrice) *
      100
    ).toFixed(2);

    return (
      <TableRow>
        <TableCell align="left">{ticker}</TableCell>
        <TableCell align="left">
          ${this.state.watchItemCurrentPrice ? currentPrice.toFixed(2) : null}
        </TableCell>
        <TableCell align="left">{percentChange}%</TableCell>
        <Button
          align="bottom"
          onClick={() => this.handleClickDelete(this.props.watchedStock)}
        >
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteOutlineIcon />
          </IconButton>
        </Button>
      </TableRow>
    );
  }
}

export default WatchItem;
