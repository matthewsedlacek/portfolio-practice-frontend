import React, { Fragment } from "react";
import WatchItem from "./WatchItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const WatchList = (props) => {
  return (
    <div className="profileContainer">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Ticker</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Daily Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <WatchItem company={props.company} stock={props.stock} />
            {/* <IconButton aria-label="delete"> */}

            {/* </IconButton> */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WatchList;
