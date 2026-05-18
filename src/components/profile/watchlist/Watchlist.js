import React from "react";
import WatchItem from "./WatchItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Watchlist = ({ userWatchList = [], handleDelete }) => (
  <TableContainer component={Paper}>
    {userWatchList.length === 0 ? (
      <Typography variant="body2" color="textSecondary" style={{ padding: 16 }}>
        No stocks on your watchlist yet.
      </Typography>
    ) : (
      <Table size="small" aria-label="watchlist">
        <TableHead>
          <TableRow>
            <TableCell>Ticker</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Change</TableCell>
            <TableCell padding="none" />
          </TableRow>
        </TableHead>
        <TableBody>
          {userWatchList.map((item) => (
            <WatchItem
              key={item.id}
              watchedStock={item}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>
    )}
  </TableContainer>
);

export default Watchlist;
