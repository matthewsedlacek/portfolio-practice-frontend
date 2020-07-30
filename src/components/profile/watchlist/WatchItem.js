import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

const WatchItem = (props) => {
  const { ticker } = props.watchedStock.stock_price.company;
  const { current_price, percent_change } = props.watchedStock.stock_price;

  const handleClickDelete = (watchedStock) => {
    props.handleDelete(watchedStock);
  };

  return (
    <TableRow>
      <TableCell align="left">{ticker}</TableCell>
      <TableCell align="left">{current_price}</TableCell>
      <TableCell align="left">{percent_change}</TableCell>
      <Button
        align="bottom"
        onClick={() => handleClickDelete(props.watchedStock)}
      >
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteOutlineIcon />
        </IconButton>
      </Button>
    </TableRow>
  );
};

export default WatchItem;
