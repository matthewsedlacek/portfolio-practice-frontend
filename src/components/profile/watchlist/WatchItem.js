import React, { Fragment } from "react";
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
    console.log(this.props);
    // const token = localStorage.getItem("token");
    let individualTicker = this.props.watchedStock.stock_price.company.ticker;
    // if (token) {
    if (this.props) {
      api.stockPrices.getWatchListPrice(individualTicker).then((data) => {
        this.setState({ watchItemCurrentPrice: data });
        console.log(this.state.watchItemCurrentPrice.c);
      });
    }
  };

  handleClickDelete = (watchedStock) => {
    this.props.handleDelete(watchedStock);
  };

  render() {
    const { ticker } = this.props.watchedStock.stock_price.company;
    const {
      current_price,
      percent_change,
    } = this.props.watchedStock.stock_price;

    return (
      <TableRow>
        <TableCell align="left">{ticker}</TableCell>
        <TableCell align="left">{this.state.watchItemCurrentPrice.c}</TableCell>
        <TableCell align="left">{percent_change}</TableCell>
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
